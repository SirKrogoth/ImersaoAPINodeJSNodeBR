const { obterPessoas } = require('./service')

async function main(){
    try {
        const { results } = await obterPessoas('a')

        const pesos = results.map(item => parseInt(item.height))
        //irá retornar um array de pesos [10.2, 11.3, 14.7, 25.3]
        console.log('pesos', pesos)

        const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo
        })

        console.log('Total ', total)

    } catch (error) {
        console.error('DEU RUIMM PUG', error)
    }
}

main()