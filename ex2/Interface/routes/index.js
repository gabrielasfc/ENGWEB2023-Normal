var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get("/", (req, res, next) => {
  var date = new Date().toISOString().substring(0,19)
  axios.get("http://localhost:15030/plantas")
    .then(resp => {
      res.render("index", {plantaslist: resp.data, d: date})
    })
    .catch(err => {
      res.render("error", {error: err})
    })
})

router.get("/:id", (req, res) => {
  var date = new Date().toISOString().substring(0,19)
  axios.get("http://localhost:15030/plantas/" + req.params.id)
    .then(resp => {
      res.render("planta", {p: resp.data, d: date})
    })
    .catch(err => {
      res.render("error", {error: err})
    })
})

router.get("/especies/:id", (req, res) => {
  var date = new Date().toISOString().substring(0,19)
  axios.get("http://localhost:15030/plantas?especie=" + req.params.id)
    .then(resp => {
      res.render("especie", {plantaslist: resp.data, d: date})
    })
    .catch(err => {
      res.render("error", {error: err})
    })
})

module.exports = router;
