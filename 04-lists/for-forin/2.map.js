const service = require('./service')

async function main(){
    try {
        const results = await service.obterPessoas(`a`)
        const names = []

        console.time('foreach')
        results.results.forEach(item => {
            names.push(item.name)
        });
        console.timeEnd('foreach')

        console.log('names ', names)

        //trabalhando com o map
        //consst names = results.results.map(function (pessoa){)
        //  return pessoa.name
        //})
        console.time('map')
        const names2 = results.results.map((pessoa) => pessoa.name)
        console.timeEnd('map')

        console.log('Names: ' , names2)

    } catch (error) {
        console.error('DEU RUIM ', error)
    }
}

main()