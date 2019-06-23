var path = require("path");


function app(app){
    // get request to call the servey page
    app.get("/survey",function(req,res){
        res.sendFile(path.join(__dirname,"../public/survey.html"));
    });

    // get request to call the home page
    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"));
    })
}

module.exports = app;