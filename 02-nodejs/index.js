/*
00 - Preciso Obter um usuário
01 - Preciso Obter o número de telefone de um usuário a partir de seu ID
02 - Obter o endereço do usuário pelo ID
*/

function obterUsuario(callback){
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Leon Scoot Kennety',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '989585603',
            ddd: 51
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'Boqueirao',
            numero: 3521
        })
    }, 2000);
}

function resolverUsuario(erro, usuario){
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
    // null || "" || 0 === false
    if(error){
        console.error('DEU RUIM em USUARIO', error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error('DEU RUIM em TELEFONE', error1)
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.error('DEU RUIM em ENDERECO', error2)
                return;
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua}, ${endereco.numero},
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})

//const usuario = obterUsuario()
//const telefone = obterTelefone(usuario.id)

//console.log('Usuario: ' + usuario)
//console.log('Telefone: ' + telefone)