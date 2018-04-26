var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use('/findToy', (req, res) => {
    //console.log(req.query.id);
    var query={};
    var tid=req.query.id;
    //query={id:tid};
    Toy.find({id:tid},(err,toys)=>{
        if (err) {
            res.type('html').status(500);
            res.send(`Error:${err}`);       
        } else {
            //res.render('books',{ books:books });
            console.log(toys);
            res.json({ toys });
        }
    });
    
    });

// app.use('/', (req, res) => {
// 	res.json({ msg : 'It works!' });
//     });




app.listen(3000, () => {
	console.log('Listening on port 3000');
    });



// Please do not delete the following line; we need it for testing!
module.exports = app;