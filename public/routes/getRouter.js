const express = require("express");
const mysqlConn = require("../config/conexao");

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('main.ejs');
  
});

router.get('/form',(req,res)=>{
    res.render("index.ejs");
  
});
router.get('/cao',(req,res)=>{
    res.render("paginaCao.ejs");
  
});

router.get('/gato',(req,res)=>{
    res.render("paginaGato.ejs");
  
});

router.get('/lista',(req,res)=>{
    mysqlConn.query("SELECT * FROM pessoas",(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }

    })
});

module.exports = router;