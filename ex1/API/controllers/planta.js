var Planta = require("../models/planta")

// Planta list
module.exports.list = () => {
    return Planta.find()
            .then(resp => { return resp })
            .catch(err => { return err })
}

module.exports.getPlanta = id => {
    return Planta.findOne({_id: id})
            .then(resp => { return resp })
            .catch(err => { return err })
}

module.exports.getPlantasPorEspecie = esp => {
    return Planta.find({"Espécie": esp})
            .then(resp => { return resp })
            .catch(err => { return err })
}

module.exports.getPlantasPorImplantacao = impl => {
    return Planta.find({"Implantação": impl})
            .then(resp => { return resp })
            .catch(err => { return err })
}

module.exports.getFreguesias = () => {
    return Planta.distinct("Freguesia").sort()
            .then(resp => { return resp })
            .catch(err => { return err })
}

module.exports.getEspecies = () => {
    return Planta.distinct("Espécie").sort()
            .then(resp => { return resp })
            .catch(err => { return err })    
}

module.exports.addPlanta = p => {
    return Planta.create(p)
            .then(resp => { return resp })
            .catch(err => { return err }) 
}

module.exports.deletePlanta = id => {
    return Planta.deleteOne({_id: id})
            .then(resp => { return resp })
            .catch(err => { return err }) 
}