# API  EM NODE.JS

Bem vinde a esse tutorial, o objetivo aqui é escrever uma api em Node.Js e entender o processo de maneira sólida, esse material não inclui como instalar o Node em sua máquina, mas podemos indicar algum material para isso. Caso não saiba se tem o Node instalado em sua máquina, poderá verificar executando o comando a seguir, caso tenha o mesmo instalado, terá como retorno a versão do seu Node.

`npm -v`

![01- versao-node](https://user-images.githubusercontent.com/8031302/198862094-deafcff2-e5ea-4b66-aeca-e93226191804.JPG)

(imagem da ilustrativa do comando executado no prompt de comandos)

Para esse tutorial irei utilizar o Visual Studio Code para a digitar os códigos e executar a aplicação e o Insomnia será utilizado para consumir/ acessar essa aplicação. 

Link da Ide e do Insomnia:

https://code.visualstudio.com/download

https://insomnia.rest/download

## Objetivo

O objetivo desse material é estudo e ensino simplificado, utilizando linguagem simplificada e prática sempre de forma gradual, onde vamos aumentar o grau de complexidade aos poucos, possibilitando assim construir um entendimento mais sólido.

## Reforçando alguns conceitos: Api e Insomnia

1. uma api é um sistema que irá fornecer algum recurso a alguém que necessite, geralmente utilizamos essas api's para realizar cadastro, retornar informações de algum banco de dados ou qualquer outro tipo de recurso, a api deve ter uma documentação que vai explicar o que ela tem como serviços/funcionalidades e como podemos fazer uso desses serviços/funcionalidades;
2. para consumir api, ou seja utiliza-la por algum outro sistema, ou front end, é bem comum utilizarmos de ferramentas que nos ajudam a consumir esses serviços/funcionalidades. Imagina que você tem que integrar um serviço em seu site, esse serviço tem regras para ser utilizado, teríamos que fazer um código que atenda todas essas regras ... Antes mesmo de começarmos a codar uma solução podemos testar essa api fazendo uso dela sem nos preocuparmos com código. Isso graças a ferramentas como por exemplo: insomnia ou postman, vale lembrar que essas ferramentas também podem gerar códigos para consumir as api's;
3. quando estamos desenvolvendo uma api, podemos também utilizar essas ferramentas para testar nossas funcionalidades e validarmos se estamos seguindo um caminho assertivo ou não. Sim também existem outras formas de se testar, mas no momento não vamos nos aprofundar nesse ponto;

Vamos oferecer em breve um material mais focado em conceitos sobre api, rest, rest full, verbos http, endpoint e outros.

> **Dica de estudo**, o material em algumas partes terá primeiro a parte teórica e em seguida imagens ilustrativas, recomenda-se ler esse primeiro conteúdo primeiro para depois realizar a prática do mesmo, em um próximo tutorial vamos explorar aplicações a cada passo ainda mais completas. Objetivo final será ter o CRUD(cadastrar, ler, atualizar e deletar ) através de uma aplicação NODE backend.

> **Dica 2 de estudo**, recomenda-se ler o material sobre Javascript e/ou ter conhecimento do básico em Javascript antes de seguir com esse material, dessa forma você vai ter mais domínio sobre o que veremos aqui. Material de [Javascript primeiros passos](https://jsfiddle.net/user/tijacque/fiddles/) será incorporado nesse repositório e será aprimorado em breve.

## Primeiro projeto, mensagem Hello world

1. criar uma pasta de trabalho
2. abrir a pasta de trabalho no VS Code
3. abrir o terminal no modo Bash
4. executar comando no terminal para criar projeto, com -y para pular as perguntas da criação do projeto
   - `npm init -y` 
5. confirmar que foi gerado o arquivo package.json
6. executar o comando para trabalhar com  `npm install express --save`, após executar esse comando, espera-se encontrar uma pasta chamada node-modules com as bibliotecas incluídas, entre elas e express
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

### O que é endpoint e o que são parâmetros

Quando acessamos um website na internet, que não seja one page, temos durante a navegação a página principal desse portal e as demais que vão afetando o endereço que esta sendo exibido na barra da URL desse site. Então, em uma api também teremos endereços de internet que nos direcionam para os diferentes serviços dessa mesma api, temos o endereço principal e os secundários. 

Exemplo:

https://insomnia.rest/ endereço principal da página 

https://insomnia.rest/pricing endereço secundário ao clicar no link *<u>**get started**</u>*

Cada um dos links acima, vai abrir uma página diferente dentro do mesmo website, agora com essa analogia construída vamos avaliar nossa api.

Quando criamos nossa api indicamos dois caminhos, o primeiro '/' e o segundo '/link2', então cada um desses endereços vai nos direcionar a um serviço da api.

Na ferramenta escolhida para consumi da api, vamos indicar o endpoint que escrevemos no código acima, vale lembrar que para uma aplicação que esta sendo executada em seu computador o endpoint sempre iniciará com ***localhost*** seguido de **:** e a porta de acesso, no caso definimos a porta ***8081***, seguida da terminação do endereço que também foi definido em nosso código.

Sendo assim, o endpoint da nossa api é ***localhost:8081/***  e ***localhost:8081/link2***

Para essa aplicação também teremos a possibilidade de enviar para o servidor valores a serem trabalhados, esses valores estão a serem enviados do Insomnia para o servidor, chamamos de parâmetros. Você pode já ter visto algo parecido ao navegar pela internet.

Os parâmetros, quando passados por URI seguem a seguinte estrutura:

1. endpoint: `localhost:8081/link2`
2. sinal de `?`
3. nome do atributo `nome=`
4. valor do atributo `ana`
5. Caso necessário seguir passando mais atributos utilizamos o sinal `&`
6. segundo atributo `sobrenome=`
7. valor do segundo atributo `Silva`

Resultado final: `localhost:8081/link2?nome=ana&sobrenome=Silva`

> Antes de executar no insomnia precisamos iniciar o serviço no servidor, através do terminal dentro do VS Code, siga as instruções a seguir para realizar esse processo.

> Outro ponto importante, como sabemos que devemos informar ou não um parametro, ou qual é o endpoint? Simples, através da documentação ou se formos nós a pessoa desenvolvedora da api.

> Acesse a seguinte documentação de api e veja um exemplo de como a documentação é importante em uma api e como uma api pode nos prestar um serviço. https://viacep.com.br/

### Testando a aplicação:

Para executar a aplicação execute o comando: `node nome_do_arquivo.js`

1. executar o comando`node index.js`
2. abrir o Insomnia e escrever o endereço: `localhost:8081/` para acessar a primeira funcionalidade
3. clicar no botão `send`
4. para acessar a segunda funcionalidade vamos usar o endpoint `localhost:8081/link2`
5. para acessar a segunda funcionalidade retornando parâmetros vamos indicar o endpoint: `localhost:8081/link2?nome=ana&sobrenome=Silva`



### Imagens da aplicação em execução

(1. iniciando o arquivo no servidor com comando node nome_arquivo.js)

![11 - executar indexjs - node](https://user-images.githubusercontent.com/8031302/199381803-fcc95857-d5d5-41ea-a176-ff64ef45b5fd.jpg)

(2. como ficará o consumo da primeira funcionalidade no insomnia, resultado será o olá mundo sem formatação, apenas como texto simples, note que acima desse retorno temos o código 200 ok - indicando sucesso no consumo do endpoint)

![12 - resposta requisicao 1 - node](https://user-images.githubusercontent.com/8031302/199381845-40ee399a-3d8c-484b-a376-5eb5bb55e1cd.jpg)

(3. consumo da segunda funcionalidade da nossa aplicação, o resultado aqui esta no formato Json, também podemos notar o código 200 ok indicando sucesso nesse consumo)

![13 - resposta da requisicao 2 - node](https://user-images.githubusercontent.com/8031302/199381876-7c4ee680-a6a9-4b46-8509-363ca9350810.jpg)

(4. assim como programamos o segundo método tras o req.query, ou seja ele tenta identificar se tem algum parâmetro passado para o servidor através da URI, por não encontrar nada ele trás o json do console vazio {} )

![14 - resultado segunda requisicao 2 - node](https://user-images.githubusercontent.com/8031302/199381898-72f50cb6-8032-488c-b87b-945e9547dc3b.jpg)

(5. aqui enviamos a mesma solicitação anterior, dessa vez com os parâmetros: nome e sobrenome)

![15 - requisicao 2 com parametros insomnia - node](https://user-images.githubusercontent.com/8031302/199381923-b15249b6-24fb-4c13-8878-65750c192d58.jpg)

(6. no servidor estamos agora vendo os valores que o req.query encontrou na URI o nome e o sobrenome, escritos na formatação Json)

![16 - requisicao 2 com parametros no vc - node](https://user-images.githubusercontent.com/8031302/199381943-10acdb80-d64f-4ffb-a36a-68b15fefee7f.jpg)

## Conclusão do material API NodeJS 1

Concluímos aqui nosso primeiro contato com o desenvolvimento de uma API NodeJs e vamos seguir para o próximo material, com um pouco mais de complexidade.

Antes de seguirmos para esse próximo passo, proponho o desafio pessoal de criar uma nova api agora com 3 funcionalidades, os retornos devem ser com a formatação Json.

Sugestão para o desafio:

1. A api deve conter 3 funcionalidades na index.js sendo 1) ao acessar a funcionalidade 1 deve-se retornar a data e horário do servidor; 2) ao acessar a funcionalidade 2 deve-se criar um Json com o nome, modelo e ano de um automóvel; 3) ao acessar a funcionalidade 3 deve-se informar o estado e municio onde você mora, esses dados devem ser recebidos pela api e exibidos no console.

## Próximo Material

aguardando o link...

Para enviar sugestão de material, me segue e me chama no Linkedin: https://www.linkedin.com/in/hernandesjacque/

