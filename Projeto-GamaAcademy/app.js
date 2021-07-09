const jogos = require('./database')
/* Pegar o input */
const readline = require("readline-sync")
const entradaInicial = readline.question('Deseja buscar algum jogo?S/N ')

if( entradaInicial.toUpperCase() === 'S') {
    console.log("Essas são as categorias dispiníveis: ")
    console.log('Esportes', '/ Tiro', '/ Terror', '/ Corrida', '/ Aventura', ' / Luta')

    const entradaCategotia = readline.question('Qual categoria voce escolhe :')

    const retorno = jogos.filter(jogos => jogos.categoria === entradaCategotia)

    console.table(retorno)
}else{
    const jogosOrdenados =  jogos.sort((a,b) => a.id - b.id)
    console.log('Esses são todos os jogos disponiveis: ')
    console.table(jogosOrdenados)
}