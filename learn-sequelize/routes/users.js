var express = require('express');
var User = require('../models').User
var router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    console.error(err)
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const users = await User.create({
      name: req.body.name,
      age: req.body.age,
      married: req.body.married,
    })
    console.log(users)
    res.status(201).json(users)
  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = router;
