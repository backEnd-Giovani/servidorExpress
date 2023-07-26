const express = require('express');
import express from 'express';


const app = express()

app.get('/saludo',(req,res)=>{
    res.send("Hola funcionando desde express")
})

app.listen(8080,()=> console.log("Servidor funcionando en puerto 8080!!"))