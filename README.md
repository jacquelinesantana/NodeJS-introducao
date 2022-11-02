# API  EM NODE.JS

Bem vinde a esse tutorial, o objetivo aqui é escrever uma api em Node.Js e entender o processo de maneira sólida, esse material não inclui como instalar o Node em sua máquina, mas podemos indicar algum material para isso. Caso não saiba se tem o Node instalado em sua máquina, poderá verificar executando o comando a seguir, caso tenha o mesmo instalado, terá como retorno a versão do seu Node.

`npm -v`

![01- versao-node](https://user-images.githubusercontent.com/8031302/198862094-deafcff2-e5ea-4b66-aeca-e93226191804.JPG)

(imagem da ilustrativa do comando executado no prompt de comandos)

Para esse tutorial irei utilizar o VS Code.

> Dicas de estudo, o material em algumas partes terá primeiro a parte teórica e em seguida imagens ilustrativas, recomenda-se ler esse primeiro conteúdo primeiro para depois realizar a prática do mesmo, em um próximo tutorial vamos explorar aplicações a cada passo ainda mais completas. Objetivo final será ter o CRUD(cadastrar, ler, atualizar e deletar ) através de uma aplicação NODE backend.
>

> Dica 2 de estudo, recomenda-se ler o material sobre Javascript e/ou ter conhecimento do básico em Javascript antes de seguir com esse material, dessa forma você vai ter mais domínio sobre o que veremos aqui. Material de [Javascript primeiros passos](https://jsfiddle.net/user/tijacque/fiddles/) será incorporado nesse repositório.
>

## Primeiro projeto, mensagem Hello world

1. criar uma pasta de trabalho
2. abrir a pasta de trabalho no VS Code
3. abrir o terminal no modo Bash
4. executar comando no terminal para criar projeto, com -y para pular as perguntas da criação do projeto
   - `npm init -y` 
5. confirmar que foi gerado o arquivo package.json
6. executar o comando para trabalhar com  `npm intall express --save`, após executar esse comando, espera-se encontrar uma pasta chamada node-modules com as bibliotecas incluídas, entre elas e express
7. criar um novo arquivo com nome index.js
8. por último, o próximo passo **só deve ser executado após escrever o código do seu arquivo index** que esta nesse mesmo material no próximo capitulo, para executar a aplicação usar comando `node index.js`

### Primeiro projeto, primeiros passos por imagens

![02- criar projeto-node](https://user-images.githubusercontent.com/8031302/198862265-760eda0d-63f9-425b-96f3-3a77a0733240.jpg)

(1. imagem criando projeto - definir a pasta de trabalho)

![03- abrir terminal-node](https://user-images.githubusercontent.com/8031302/198862865-e09a493d-db55-4ea8-b3d8-7a7d09550cd3.jpg)

(2. imagem abrindo o terminal)

![04- comando para iniciar o ambiente-node](https://user-images.githubusercontent.com/8031302/198862463-b7029f61-f5f3-4b3f-96ed-fa08184cf86d.JPG)

(3. imagem do comando npm init -y no terminal)

![05- arquivo gerado dentro do projeto-node](https://user-images.githubusercontent.com/8031302/198862481-e101374d-e7de-4533-9473-90826e00de04.JPG)

(4. imagem do arquivo gerado no projeto após executar o comando anterior)

![6 - instalando express -node](https://user-images.githubusercontent.com/8031302/199374317-9817041f-52b8-4d2f-9ab4-591e538bee57.JPG)

(5. imagem do comando para instalação do Express)

![7 - nodemodules-node](https://user-images.githubusercontent.com/8031302/199374350-1cef6f43-ca8f-4c1b-9c2b-2a192279918f.JPG)

(6. imagem das bibliotecas do node-modules apos o comando para instalação do Express)

![8 novo arquivo-node](https://user-images.githubusercontent.com/8031302/199374417-407c44a7-0e66-4e1a-bbbc-3e4cc690beb1.jpg)

![9 - index-node](https://user-images.githubusercontent.com/8031302/199374491-5fc06f48-dece-46ff-ae5a-dccd7551ceaa.jpg)

(7. criando um novo arquivo)


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

A segunda linha, estamos iniciando a biblioteca para utilizar os seus métodos. A partir desse ponto, onde lemos app entendemos que estamos chamando a Express para utilizarmos algum método da mesma.

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

### Imagens da aplicação em execução

