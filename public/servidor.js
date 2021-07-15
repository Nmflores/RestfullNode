const mysql  = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const mysqlConn = require("./config/conexao");

const getRouter = require("./routes/getRouter");

const postRouter = require("./routes/postRouter");

var servidor = express();

servidor.use(bodyParser.json());

servidor.use(bodyParser.urlencoded(extended=true));

servidor.use('/',getRouter);
servidor.use('/lista',getRouter);
servidor.use('/salva',postRouter);

servidor.use(express.static("public"));

servidor.listen(8000);
