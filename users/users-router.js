const router = require('express').Router();

const Users = require('./users-model');

const authrequired = require('../auth/authenticate-middleware');

router.get('/', authrequired, ( req,res )=> {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send({ magicWord: "ah ah ah!", err }));
});

module.exports = router;