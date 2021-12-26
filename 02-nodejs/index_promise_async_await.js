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

//1° passo adicionar a palavra async -> automaticamente irá retornar uma promise
main()
async function main(){
    try{
        console.time('medida-promise')
        const usuario = await obterUsuario()
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        
        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Endereco: ${endereco.rua} , ${endereco.numero}
        `)
        console.timeEnd('medida-promise')
    }catch(error){
        console.log('DEU RUIM', error)
    }
}