//jshint esversion:6
//Mr.CRUD 22/11/2022
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req , res){
  res.sendFile(__dirname+"/"+"index.html")
});

app.post("/",function(req , res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result is :"+result);
});

//bmi code

app.get("/bmicalculator",function(req , res){
  res.sendFile(__dirname+"/"+"bmiCalculator.html")
});

  app.post("/bmicalculator",function(req , res){

  var we = Number(req.body.weight);
  var he = Number(req.body.height);

  bmi = Math.floor((we / Math.pow( (he/100), 2 )).toFixed(1));
    if(bmi < 18.5){
      text = "Underweith";
    }
    if(bmi > 18.5 && bmi < 24.9){
      text ="Normal";
    }
    if(bmi > 25 && bmi < 29.9){
      text ="Overweith";
    }
    if(bmi > 30 && bmi < 34.9){
      text ="Overweith";
    }
    if(bmi > 35){
      text ="Overweith";
    }
  res.send("BMI IS  :"+bmi +" You are "+text);
});

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`);
});
