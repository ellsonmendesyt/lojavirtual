const express = require('express');
const cors    = require('cors');
const sequelize  = require('./models');

const app = express();
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send({api:'sucesso'});
})



sequelize.authenticate().then(()=>{console.log('conectado')})
















app.listen(4000,()=>{
    console.log('Servidor ativo');
})