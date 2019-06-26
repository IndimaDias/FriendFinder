var path = require("path");
var friends = require("../data/friends.js");

function app(app){
    app.get("/api/friends",function(req,res){
        return res.json(friends);
    
    });
    
    app.post("/api/friends",function(req,res){
        var newFriend = req.body;        

        console.log(newFriend);
        var userScores = newFriend.scores;

        console.log(userScores);

        var diffrences = [];
        var minimumDif = 0; //least amount of difference.
        var totalDif = 0; //total of diffrences
        var matchingIndex = 0;

        for (var i=0; i<friends.length;i++){
            var friendScore =  friends[i].scores;
            console.log(friendScore);

            for(var x=0; x < friendScore.length; x++){
                 totalDif += Math.abs(friendScore[x] - userScores[x]);
                       
            }

            if(totalDif<minimumDif || minimumDif === 0 ){
                minimumDif = totalDif;
                matchingIndex = i;
             }
        }

        console.log(friends[matchingIndex]);
        friends.push(newFriend);
        res.send(friends[matchingIndex]);
    
    });
    
}

module.exports = app;