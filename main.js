const express = require("express");
const morgan = require("morgan")
const data = require("./data.mjs")
const security = require("./security.mjs")

var app = express();

app.use(express.json());
app.use(morgan("dev"))


app.get("/",function(request,response){
    response.send("Hello World!")
});

app.get("/account",function(request,response){

    console.log(Object.keys(request.query).length);

    if(Object.keys(request.query).length == 0 && security.isAdmisable(request.body.token,"ADMIN")){

        let accounts = data.getAllAccounts();
        response.sendStatus(200).json({"accounts": accounts});

    }else if(Object.keys(request.query).length == 1 && security.isAdmisable(request.body.token,"USER")){

        let account = data.getAccountById(request.query.id);
        response.sendStatus(200).json({"account": account});

    }else{
        response.sendStatus(403)
    }
});


app.post("/account",function(request,response){
    
    console.log(request.body);

    response.sendStatus(200);
});


app.listen(10000, function () {
    console.log("Started application on port %d", 10000)
});