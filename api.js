const express = require('express');
const cors    = require('cors');
const {sequelize,Usuario, Carrosel}  = require('./models');

const app = express();
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send({api:'sucesso'});
})




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
        console.error(erro);
    }
})


///BUSCAR USUARIO PELO ID
app.get('/usuario/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        const usuario = await Usuario.findOne({where:{id}})
        res.status(200).json(usuario);
    }catch(erro){
        return res.status(401).json({'msg':'não conseguimos encontrar o dado buscado'})
        console.error(erro);
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
        return res.status(500).json({msg:'erro'})
        console.error(erro);
    }
})



















app.listen(4000,async()=>{
    
    
    await sequelize.authenticate()

    console.log('conectado com o banco');
})