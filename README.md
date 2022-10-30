# API  EM NODE.JS

Bem vinde a esse tutorial, o objetivo aqui é escrever uma api em Node.Js e entender o processo de maneira sólida, esse material não inclui como instalar o Node em sua máquina, mas podemos indicar algum material para isso. Caso não saiba se tem o Node instalado em sua máquina, poderá verificar executando o comando a seguir, caso tenha o mesmo instalado, terá como retorno a versão do seu Node.

`npm -v`

(imagem da ilustrativa do comando executado no prompt de comandos)

Para esse tutorial irei utilizar o VS Code.

## Primeiro projeto, mensagem Hello world

1. criar uma pasta de trabalho
2. abrir a pasta de trabalho no VS Code
3. executar comando no terminal para criar projeto, com -y para pular as perguntas da criação do projeto
   1.  `npm init -y` 
4. executar o comando para trabalhar com  `npm intall express --save`
5. criar um novo arquivo com nome index.js
6. para executar a aplicação usar comando `node index.js`

## Reinstalar o projeto em outra máquina

Ao transferir o projeto para outra máquina ou para nuvem, devemos ignorar a pasta node_modules que esta dentro do projeto nesse momento. Então basta transferir o projeto e executar `npm install` que a instalação das dependências será feita automaticamente.

## Primeira aplicação

A api a seguir é um simples modelo onde temos duas requisições, para isso vamos utilizar alguns recursos instalados anteriormente nesse projeto, como o **framework Express**.

O Express é um framework que possui características que facilitam o desenvolvimento de nossas aplicações web e APIs, como um sistema de rotas completo, tratamento de exceções, gerenciamento de requisições HTTP e muito mais.

```
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
```

**Entendendo o código acima**:

```
const express = require("express");
const app = express()
```

A primeiras linha, faz a inclusão do Framework, chamando ele dentro de uma constante chamada express. Essa linha pode vir escrita `import express from 'express';` em algumas aplicações também, que basicamente esta fazendo a mesma coisa, chamando as bibliotecas do Framework para atuarem na aplicação.

A segunda linha, estamos instanciando a biblioteca para utilizar os seus métodos. A partir desse ponto, onde lemos app entendemos que estamos chamando a Express para utilizarmos algum método da mesma.

```
app.get('/',(req, resp)=>{
  resp.send('olá mundo'); //saída sem formatação
});
```

Acima, identificamos que chamamos a Express com seu método get para atuar, o **Get** é um método que requer três parâmetros:

1. endereço que vamos responder, no caso `'/'`; 
2. `req` = requisição feita; 
3.  `resp` = resposta da requisição;

Note que em seguida a resp = resposta da requisição esta com o valor 'olá mundo' dentro do método send, que vai enviar esse valor para quem fez a requisição.

```
app.get('/link2',(req, resp)=>{
	console.log(req.query)
    resp.json({"mensagem":"oi povo!"}) 
});
```

Acima temos o segundo método construído, para atender o endpoint /link2, sempre que esse endereço for consumido ele vai executar esse método. Aqui notamos uma estrutura muito parecida com a estrutura do primeiro método, porém com algumas diferenças.

Dentro desse método adicionamos o código: `console.log(req.query)`, com a prática aqui proposta vamos conseguir ver o query trazendo em formato Json o que for passado como parâmetro na URL.  Reforçando que o `console.log()`, apenas escreve no console o que esta sendo passado dentro do (). Esse valor será exibido no console do servidor.

A seguir teremos também o `resp`, que esta trabalhando com o método `json`, para dessa vez fazer a entrega da resposta formatada, formato json, note que os dados estão sendo passados no formato json.

```
app.listen(8081,()=>{
  console.log('agora vai...')
})
```

Por último, temos a Express sendo novamente chamada para a escrita do método que diz em que porta deve ser entregue essa aplicação, no caso porta 8081, o valor do console.log será exibido para o servidor e não para o cliente. 
