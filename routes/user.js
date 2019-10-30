const express = require('express');
const router = express.Router();


// controllers
const controllers = require('../controllerls/user')

// routers
router.get('/', controllers.getUser);

router.post('/user', controllers.addUser);

router.get('/user/:id', controllers.getSingleUser);

router.put('/user/:id' , controllers.updateUser);

router.delete('/user/:id' , controllers.deleteUser);


module.exports = router;

