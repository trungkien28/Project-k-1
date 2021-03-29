var express = require("express");
var app = express();

app.listen("5000",function(){
    console.log("sever is running");
});
app.use(express.static('public'));