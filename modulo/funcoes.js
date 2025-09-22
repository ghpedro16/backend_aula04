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
    //Variavel de base para cabeçalho da API
    let message = {status: true, status_code: 200, development: 'Pedro Henrique Araujo', uf: '', descricao: '', capital: ''}

    //Loop
    dados.listaDeEstados.estados.forEach(function (item){
        if(item.sigla == sigla){
            message.uf = item.sigla
            message.descricao = item.nome
            message.capital = item.capital
        }
        
    })

    return message

}

// Retorna uma lista de estados pesquisando pela regiao
const getEstadosByRegiao = function(regiao){
    //Variavel de base para cabeçalho da API
    let message = {status: true, status_code: 200, development: 'Pedro Henrique Araújo', regiao: '', estados: []}

    //Loop
    dados.listaDeEstados.estados.forEach(function (item){
        if(item.regiao == regiao){
            message.regiao = item.regiao
            // message.estados.push(item.sigla)
            // message.estados.push(item.nome)
            // message.estados.push(item)
            let json = {}
            json.uf = item.sigla
            json.descricao = item.nome

            message.estados.push(json)

        }
    })

    return message
}

// Retorna uma lista de estados referentes as capitais do país
const getVerifyCapitaisDoPais = function(){
    //Variavel de base para cabeçalho da API
    let message = {status: true, status_code: 200, development: 'Pedro Henrique Araújo', capitais: []}

    //Loop
    dados.listaDeEstados.estados.forEach(function (item){
        if(item.capital_pais){
            let json = {}
            json.capital_atual = item.capital_pais.capital
            json.uf = item.sigla
            json.descricao = item.nome
            json.capital = item.capital
            json.regiao = item.regiao
            json.capital_pais_ano_inicio = item.capital_pais.ano_inicio
            json.capital_pais_ano_fim = item.capital_pais.ano_fim

             message.capitais.push(json)
        }
        
    })

    return message

}

// Retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function(sigla){
    //Variavel de base para cabeçalho da API
    let message = {status: true, status_code: 200, development: 'Pedro Henrique Araujo', uf: '', descricao: '', quantidade_cidades: '', cidades: []}
    
    //Loop
    dados.listaDeEstados.estados.forEach(function (item){
        if(item.sigla == sigla){
            message.uf = item.sigla
            message.descricao = item.nome
            message.quantidade_cidades = message.cidades.length
            message.cidades.push(item.cidades)
        }
        
    })

    return message

}

//console.log(getEstadoBySigla('SP'))

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,
    getEstadosByRegiao,
    getVerifyCapitaisDoPais,
    getCidadesBySigla
}
