const express = require('express');
const cors    = require('cors');
const {sequelize,Usuario, Carrosel,Produto}  = require('./models');
const { restart } = require('nodemon');
const jwt= require('jsonwebtoken')


const app = express();
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send({api:'sucesso'});
})

//guardar senha
const jwtSalt='euchoquemeutecladoestáquebradohahaha';


///CRIAR UM USUARIO
app.post('/criar-usuario', async(req,res)=>{
  const {nome,email,senha}=req.body;
  try{
      const usuario = await Usuario.create({nome,email,senha})
      return res.json(usuario)
  }catch(erro){
      console.error(erro);
      return res.status(500).json({msg:'erro'})
  }
})



//BUSCAR TODOS OS USUARIOS
app.get('/usuarios', async (req,res)=>{

    try{
        const usuarios = await Usuario.findAll();
        return res.status(200).json(usuarios);
    }catch(erro){
        return res.status(500).json({msg:'erro'})
    }
})


///BUSCAR USUARIO PELO ID
app.get('/usuario/:id',auth, async(req,res)=>{
    const {id} = req.params;
    try{
        const usuario = await Usuario.findOne({where:{id}})
        res.status(200).json(usuario);
    }catch(erro){
        return res.status(401).json({'msg':'não conseguimos encontrar o dado buscado'})
    }
})







// ADICIONAR CARROSSEIS

app.post('/criar-carrosel', async(req,res)=>{
    const {img,titulo,subtitulo}=req.body;
    try{
        const carrosel = await Carrosel.create({img,titulo,subtitulo})
        return res.json(carrosel)
    }catch(erro){
        console.error(erro);
        return res.status(500).json({msg:'erro'})
    }
  })


app.get('/carroseis', async (req,res)=>{

    try{
        const carroseis = await Carrosel.findAll();
        return res.status(200).json(carroseis);
    }catch(erro){
        console.error(erro);
        return res.status(500).json({msg:'erro'})
    }
})






////ROTAS PRA CRIAR E ADICIONAR PRODUTOS
app.post('/criarproduto', async (req,res)=>{

    const {titulo,subtitulo,img,preco,noCarro}=req.body;
    try{
         const produto=await Produto.create({titulo,subtitulo,img,preco,noCarro})
         return res.status(200).json(produto);
    }catch(erro){
        console.error(erro);
        return res.status(500).json({msg:erro});
    }
})

  
app.get('/produtos', async (req,res)=>{
    try{
     const produtos = await Produto.findAll();
     return res.status(200).json(produtos)
    }catch(erro){
        console.error(erro);
        return res.status(500).json({erro})
    }
})


app.delete('/produtos/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        const produto = await Produto.findOne({where:{id}})
        await produto.destroy();
        return res.status(200).json({msg:'deletado'})
    }catch(erro){
        console.error(erro);
        return res.status(401).json({'msg':'não conseguimos finalizar a operacao'})
    }
})





app.listen(4000,async()=>{
    
    
    await sequelize.authenticate()

    console.log('conectado com o banco');
})


app.post('/auth', async(req,res)=>{
    const {nome,email,senha}=req.body;

    if(email == undefined){
      res.status(400).json({mgs:'email vazio'})
    }else{

        try{
            const usuario = await Usuario.findOne({where:{email}})

             if(usuario !==undefined){
                if(usuario.senha ==senha){

                    ///cria o payload do toke
                    jwt.sign({nome:usuario.nome, email:usuario.email},jwtSalt,{expiresIn:'48h'},(err,token)=>{
                        if(err){
                            res.status(400).json({msg:'falha interna'})
                        }else{ 
                            res.status(200).json({token:token})
                        }
                    })

                }else{
                    res.status(401).json({msg:'credenciais invalidas'});
                }
            }else{
                 res.status(404).json({msg: 'usuario nao encontrado'})
             }

            // res.status(200).json(usuario);
        }catch(erro){
             res.status(401).json({'msg':'email ou senha incorreto'})
           
        }

    }
  })



  function auth(req,res,next){

    const authToken = req.headers['authorization'];
    console.log(authToken)

    if(authToken!== undefined){
        const bearer = authToken.split(' ');
        const token= bearer[1];

        jwt.verify(token,jwtSalt, (erro,dados)=>{
            if(erro){
                res.status(401).json({erro:'token invalido'})

                
            }else{
                //se ta tudo ok, cria uma compo na req
                req.token=token;
                req.usuarioLogado= {id:dados.id, email:dados.email}
                next(); //so prosegue se validou
                console.log(dados);
            }
        })


    }else{
        //vazio
        res.status(401).json({erro: 'Token invalido'})
    }
    // next();
  }