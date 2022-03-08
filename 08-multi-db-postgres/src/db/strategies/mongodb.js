const ICrud = require('./interfaces/iCrud')

class MongoDb extends ICrud{
    constructor(){
        super()
    }

    create(item){
        console.log("O item foi salvo no MongoDB")
    }
}

module.exports = MongoDb