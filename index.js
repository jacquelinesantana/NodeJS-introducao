const express = require("express");
const app = express()

app.get('/',(req, resp)=>{
  resp.send('olá mundo'); //saída sem formatação
});

app.get('/link2',(req, resp)=>{
	console.log(req.query)
    resp.json({"mensagem":"oi povo!"}) 
});

app.listen(8081,()=>{
  console.log('agora vai...')
})