var path = require("path");
var friends = require("../data/friends.js");

function app(app){
    app.get("/api/friends",function(req,res){
        console.log(friends);
    
    });
    
    app.post("api/friends",function(req,res){
        console.log("Post");
    });
    
}

module.exports = app;