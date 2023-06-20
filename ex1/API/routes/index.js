var express = require('express');
var router = express.Router();
var Planta = require("../controllers/planta")

/* GET home page. */
router.get("/plantas", (req, res) => {
  if (req.query && req.query.especie){
    Planta.getPlantasPorEspecie(req.query.especie)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(520).json({error: err, message: "Não consegui obter a lista de plantas."}))
  }
  else if (req.query && req.query.implant){
    Planta.getPlantasPorImplantacao(req.query.implant)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(520).json({error: err, message: "Não consegui obter a lista de plantas."}))
  }
  else{
    Planta.list()
      .then(data => res.status(200).json(data))
      .catch(err => res.status(520).json({error: err, message: "Não consegui obter a lista de plantas."}))
  }
})


router.get("/plantas/freguesias", (req, res) => {
  Planta.getFreguesias()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(520).json({error: err, message: "Não consegui obter a lista de freguesias."}))
})


router.get("/plantas/especies", (req, res) => {
  Planta.getEspecies()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(520).json({error: err, message: "Não consegui obter a lista de espécies."}))
})


router.get("/plantas/:id", (req, res) => {
  Planta.getPlanta(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(521).json({error: err, message: "Não consegui obter a planta."}))
})


router.post("/plantas", (req, res) => {
  Planta.addPlanta(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(522).json({error: err, message: "Não consegui inserir a planta."}))
})


router.delete("/plantas/:id", (req, res) => {
  Planta.deletePlanta(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(523).json({error: err, message: "Não consegui remover a planta."}))
})

module.exports = router;
