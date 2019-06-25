var path = require("path");
var friends = require("../data/friends.js");

function app(app){
    app.get("/api/friends",function(req,res){
        return res.json(friends);
    
    });
    
    app.post("/api/friends",function(req,res){
        return console.log("Post");
    });
    
}

module.exports = app;