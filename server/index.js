const express = require('express');
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID; // we will use this later
const bodyParser= require('body-parser')
const app = express();
var router = express.Router()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


  
MongoClient.connect('mongodb+srv://test:test@cluster0-hlkqt.mongodb.net/test?retryWrites=true', { useNewUrlParser: true } ,(err, db) => {
    // ... start the server
    console.log(db)
    var dbase = db.db("MYtineraryDB");
      if (err) 
        return console.log(err)
      
    app.listen(8080, function() {
        console.log('listening on 8080');
    });
    
    const citiesCollection = dbase.collection('cities');

    //Get All Cities
    router.get('/cities', (req, res) => {
        citiesCollection.find().toArray( (err, results) => {
            console.log()
            if (err)
                return res.send({
                    success: false,
                    message: "Error: Server Error"
                })
            return res.send({
                success: true,
                data: results
            })
        });
    });



    app.use('/api',router)
  });
