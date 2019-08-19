var db = require('../db');
var shortid = require('shortid');
module.exports.index = function(req,res){
    res.render('users/index',{
        users:db.get('users').value()
    });
};
module.exports.seach = function(req,res){
    var q=req.query.q;
    var matchUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase())!==-1;
    });
    res.render('users/index',{
        users:matchUsers
    })
}
module.exports.id = function(req,res){
    var id  = req.params.id;
    var user = db.get('users').find({id:id}).value();
    res.render('users/view',{
        user:user
    });
};
module.exports.create = function(req,res){
    req.body.id = shortid.generate();
    
    db.get('users').push(req.body).write();
    res.redirect('/users');
};
