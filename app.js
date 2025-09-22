/**************************************************************************************************************************************************************************
 * Objetivo: EndPoints referentes a API de estados e cidades
 * Autor: Pedro Henrique Araújo
 * Data: 15/09/2025
 * Versão: 1.0
 * 
 * Obs: Instalação do Express, Cors, Body Parser
 * npm install express     --save
 * npm install    cors     --save
 * npm install body-parser --save
 *************************************************************************************************************************************************************************/

//Import das dependencias da API
const express = require('express') //Responsavel pela API
const cors = require('cors') //Responsavel pela permissao da API (APP)
const bodyParser = require('body-parser') //Responsavel por gerenciar a chegada dos dados da API com o Front

//Import do arquivo de funções
const dados = require('./modulo/funcoes.js')

//Retorna a porta do servidor atual ou colocamos uma porta local 
const PORT = process.PORT || 8080

//Criando uma instancia de uma classe do express 
const app = express()

//Configuração de permissoes
app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*') //Servidor de origem da API
    response.header('Acess-Control-Allow-Methods', 'GET') //Verbos permitidos
    //Carrega as configurações do CORS da API
    app.use(cors())
    next() //Proximo, carregar os proximos endpoints
})

//request -> chegada de dados da API
//response -> retorno de dados da API 

//EndPoint que retorna todos os estados
app.get('/v1/estados', function(request, response){
    //Pesquisa na função os estados
    let estados = dados.getAllEstados()
    //Retorna o status code
    response.status(estados.status_code)
    //Retorna o JSON
    response.json(estados)
})

//EndPoint que retorna estado por sigla
app.get('/v1/estado/:uf', function(request, response){
    //Variavel que recebe o parametro da url
    let sigla = request.params.uf

    //Acessa a função 
    let estado = dados.getEstadoBySigla(sigla)
    //Retorna o status e o JSON
    response.status(estado.status_code).json(estado)
})

//EndPoint que retorna capitais por sigla
app.get('/v1/capital/:uf', function(request, response){
    //Variavel que recebe o parametro da url
    let sigla = request.params.uf

    //Acessa a função
    let capital = dados.getCapitalBySigla(sigla)
    //Retorna o status e o JSON
    response.status(capital.status_code).json(capital)
})

//EndPoint que retorna estados por regiao
app.get('/v1/estados/regiao/:regiao', function(request, response){
    //Variavel que recebe o parametro da url
    let nomeRegiao = request.params.regiao

    //Acessa a função
    let estado = dados.getEstadosByRegiao(nomeRegiao)
    //Retorna o status e o JSON
    response.status(estado.status_code).json(estado)
})

//EndPoint que mostra o histórico de capitais do país
app.get('/v1/capitais', function(request, response){
    //Acessa a função
    let verificarCapitais = dados.getVerifyCapitaisDoPais()

    //Retorna o status e o JSON
    response.status(verificarCapitais.status_code).json(verificarCapitais)

})

//EndPoint que retorna as cidades do estado
app.get('/v1/cidades/:uf', function(request, response){
    //Variavel que recebe o parametro da url
    let sigla = request.params.uf

    //Acessa a função
    let cidades = dados.getCidadesBySigla(sigla)
    //Retorna o status e o JSON
    response.status(cidades.status_code).json(cidades)

})

//Start na API
app.listen(PORT, function(){
    console.log('API aguardando requisições ...')
})