var express = require('express');
var router = express.Router();
var validate = require('../validate/user.validate')
var controller = require('../controllers/user.controller');
var authMiddleware = require('../middleware/auth.middleware')
router.get('/',controller.index);
router.get('/search',controller.seach);
router.get('/create',function(req,res){
   res.render('users/create') 
});
router.get('/:id',controller.id);
router.post('/create',validate.create, controller.create);
module.exports = router;