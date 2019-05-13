const express = require('express');
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID; // we will use this later
const bodyParser= require('body-parser')
const app = express();
var router = express.Router()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const async = require('async');

  
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

    // Get All Cities
    router.get('/cities', (req, res) => {
        citiesCollection.find().toArray( (err, results) => {
            
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
    // get itineraries
    const itinerariesCollection = dbase.collection('itineraries');
    router.get('/itineraries/:city', (req, res) => {
        const city = req.params.city;
        var itineraries = {};
        var tasks =[
            (callback)=>{
                itinerariesCollection.find({"ref":city}).toArray((err, results)=>{
                    if(err)
                    return callback(err);
                    itineraries.itineraries = results;
                    callback();
                });
            },
            function(callback){
                citiesCollection.find({"ref":city}).toArray((err, resultTwo)=>{
                    if(err)
                    return callback(err);
                    itineraries.cities = resultTwo;
                    callback();
                });
            },
        ];
        async.parallel(tasks, function(err){
            if(err)
            return err;
            return res.send(itineraries)
        })

    });


    app.use('/api',router)
  });


    // get itineraries by keywords
    // const itinerariesCollection = dbase.collection('itineraries');
    // // const cityCollection = dbase.collection('cities')
    // router.get('/itineraries/:reference', (req, res) => {
    //     const reference = req.params.reference;
    //     console.log(reference)
    //     itinerariesCollection.find().toArray( (err, results) => {
            
    //         if (err)
    //             return res.send({
    //                 success: false,
    //                 message: "Error: Server Error"
    //             })

    //         return res.send({
    //             success: true,
    //             data: results.filter(itnerary => itnerary.ref.includes(reference))
    //         })
           
    //     });

    //     // itinerariesCollection.find({
    //     //     ref: {
    //     //         $all: [reference]
    //     //     }
    //     // }).toArray((err, results) => {
    //     //     if (err)
    //     //         return res.send({
    //     //             success: false,
    //     //             message: "Error: Server Error"
    //     //         })

    //     //     return res.send({
    //     //         success: true,
    //     //         data: results
    //     //     })
    //     // })

    //     citiesCollection.find({
    //         ref: {
    //             $all: [reference]
    //         }
    //     }).toArray()


    // });


