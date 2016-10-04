var express = require('express');
var userRouter = require('./routes/userRoute');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');



var app = express();


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*ROUTES*/

app.use('/api/user',userRouter);

/*END OF ROUTES*/



/*Sending a html*/
app.get('/', function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});

/*Connection to database*/
var db = mongoose.connect(config.url,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('Connected to database');
    }
});

/*Running the server*/
app.listen(config.PORT, function () {
    console.log('Server is running on port ' + config.PORT);
});