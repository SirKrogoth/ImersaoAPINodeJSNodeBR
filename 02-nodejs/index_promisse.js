/*
00 - Preciso Obter um usuário
01 - Preciso Obter o número de telefone de um usuário a partir de seu ID
02 - Obter o endereço do usuário pelo ID
*/
//importamos um modulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){    
    //quando der algum problema -> reject(ERRO)
    //quando sucesso -> RESOLV
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function() {
            return resolve({
                id: 1,
                nome: 'Leon Scoot Kennety',
                dataNascimento: new Date()
            })
        }, 1000)

        console.log('Executou obterUsuario')
    })    
}

function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone: '989585603',
                ddd: 51
            })
        }, 2000);
        console.log('Executou obterTelefone')
    })
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'Boqueirao',
            numero: 3521
        })
    }, 2000);
    console.log('Executou obterEndereco')
}

console.log('antes const usuarioPromisse = obterUsuario()')
const usuarioPromisse = obterUsuario()
console.log('depois const usuarioPromisse = obterUsuario()')

//para manipular o sucesso, usamos a funcao .then
//para manipular erro, usamos o .catch
//usuario -> telefone -> endereco
usuarioPromisse
    .then(function (usuario){
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result){
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }                
            })        
    })
    .then(function (resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado){
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch(function (error){
        console.error('DEU RUIM', error)
    })

//const usuario = obterUsuario()
//const telefone = obterTelefone(usuario.id)

//console.log('Usuario: ' + usuario)
//console.log('Telefone: ' + telefone)