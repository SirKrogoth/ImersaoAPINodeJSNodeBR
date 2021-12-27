const { obterPessoas } = require('./service')

async function main(){
    try {
        const { results } = await obterPessoas('a')

        const familiaLars = results.filter(item => {
            //por padrao precisa retornar um boolean
            //para informar se deve manter ou remover da lista
            //false > remove da lista
            //true > mantem
            //n]ap encontrou = -1
            //encontrou = posicaoNoArray
            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result
        })

        const names = familiaLars.map(pessoa => pessoa.name)
        console.log(names)

    } catch (error) {
        console.error('DEU RUIM SEU ROSCA', error)
    }
}
main()