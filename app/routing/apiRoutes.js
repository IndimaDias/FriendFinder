var path = require("path");
var friends = require("../data/friends.js");

function app(app){
    app.get("/api/friends",function(req,res){
        return res.json(friends);
    
    });
    
    app.post("/api/friends",function(req,res){
        var reqBody = req.body;

        var newFriend = {
            name : reqBody.yourName,
            photo: reqBody.link,
            scores :[reqBody.ques1,
                    reqBody.ques2,
                    reqBody.ques3,
                    reqBody.ques4,
                    reqBody.ques5,
                    reqBody.ques6,
                    reqBody.ques7,
                    reqBody.ques8,
                    reqBody.ques9,
                    reqBody.ques10
            ]
        }

        var userScores = newFriend.scores;

        return console.log(userScores);
    
    });
    
}

module.exports = app;