/***********************************************************************************************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Pedro Henrique Araújo
 * Versão 1.0
 ************************************************************************************************************************************************************************/


const MESSAGE_ERRO = {status: false, status_code: 500, development: 'Pedro Henrique Araújo'}
//Import do arquivo
const dados = require('./estados_cidades.js')

// Retorna todos os estados
const getAllEstados = function(){
    //Variavel de base para o cabeçalho da API
    let message = {status: true, status_code: 200, development: 'Pedro Henrique Araújo', uf: []}

    //Loop
    dados.listaDeEstados.estados.forEach(function (item){
        message.uf.push(item.sigla)
    })

    //Para adicionar um elemento novo no JSON
    message.quantidade = message.uf.length

    //Remover um atributo do JSON
    //delete message.status

    if(message.uf.length > 0){
        return message //200
    } else{
        return MESSAGE_ERRO //500
    }
    
}

// Retorna um estado pesquisando pela sigla
const getEstadoBySigla = function(sigla){
    //Variavel de base para o cabeçalho da API
    let message = {status: true, status_code: 200, development: 'Pedro Henrique Araujo', uf: '', descricao: '', capital: '', regiao: ''}

    //Loop
    dados.listaDeEstados.estados.forEach(function (item){
        if(item.sigla == sigla){
            message.uf = item.sigla
            message.descricao = item.nome
            message.capital = item.capital
            message.regiao = item.regiao
        }
        
    })

    return message

}

// Retorna a capital referente a um estado pesquisando pela sigla
const getCapitalBySigla = function(sigla){
    
}

// Retorna uma lista de estados pesquisando pela regiao
const getEstadosByRegiao = function(regiao){

}

// Retorna uma lista de estados referentes as capitais do país
const getVerifyCapitaisDoPais = function(){

}

// Retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function(sigla){

}

//console.log(getEstadoBySigla('SP'))

module.exports = {
    getAllEstados,
    getEstadoBySigla
}
