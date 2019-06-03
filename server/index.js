const express = require('express');
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID; 
const bodyParser= require('body-parser')
const app = express();
var router = express.Router()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const async = require('async');
const UserSchema = require('./User');

  
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
    // post signup data
    
    router.post('/users', (req, res)=>{
        const usersCollection = dbase.collection('users');
        const { body } = req;
        const {
                password,
                firstName,
                lastName,
                username,
                country
            } = body;
        let {
        email
        } = body;
        // let email = req.body.email;
        
        email = email.toLowerCase();
        email = email.trim();
        
        usersCollection.findOne({
            email:email
            
        },(err, previousUsers)=>{
            console.log(previousUsers)
            if(err){
                return res.send({
                    success:false,
                    message: "Error: Server error"
                });
            }else if(previousUsers != null){
                return res.send({
                    success: false,
                    message: "Account already exists"
                });
            } 
       
        // let user = new UserSchema({ 
        //     username: req.body.username,
        //     password: req.body.password,
        //     email: req.body.email,
        //     firstName: req.body.firstName,
        //     lastName: req.body.lastName,
        //     country: req.body.country
        // });
        let newUser = new UserSchema();
        newUser.username = username;
        newUser.password = newUser.generateHash(password);
        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.country = country;

        
        usersCollection.save(newUser,(err, result)=>{
            if(err){
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            return res.send({
                success: true,
                message: 'Signed up'
            });
        });
    
    });

    });

    router.post('/login',(req, res)=>{
        
        const { body } = req;
        const {
                password , username
            } = body;
        // let {
        //     email
        //     } = body;

        console.log(body);
        const usersCollection = dbase.collection('users');
        usersCollection.findOne({
            // email: email
            username : username
        }, (err, users)=>{
           
            if(err){
                // console.log('err 2:',err);
                return res.send({
                    success:false,
                    message: "Error: Server error"
                });
            }
            
            if(users == null){
                return res.send({
                    success: false,
                    message: "Error: User not found"
                });
            }
            let user = new UserSchema(users);
             
            console.log(user.validPassword(password));
            if(!user.validPassword(password)){
                return res.send({
                    success:false,
                    message: "Error: Invalid password"
                });
            }
            return res.send({
                success: true,
                message: 'Valid sign in',
                token: users._id
            });  


            // let userSession = new UserSchema({ 
            //     username: req.body.username,
            //     password: req.body.password,
            // });
            // userSession.userId = user._id;
        //     userSession.save((err, doc) => {
        //         if (err) {
        //           console.log(err);
        //           return res.send({
        //             success: false,
        //             message: 'Error: server error'
        //           });
        //         }
                        
        // });
             

     });
    });
    // verify
    router.get('/verify',(req, res)=>{
        const { query } = req;
        const { token } = query;
        const usersCollection = dbase.collection('users');
        usersCollection.findOne({
            _id: ObjectID(token),
            isDeleted: false
        }, (err ,sessions)=>{
            if (err) {
                console.log(err);
                return res.send({
                  success: false,
                  message: 'Error: Server error'
                });
              }
            
            if (sessions == null) {
                
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            } 
            else {
                // DO ACTION
                return res.send({
                  success: true,
                  message: 'Good'
                });
            }
        });

    });
    // log out
    router.get('/logout',(req, res)=>{
        const { query } = req;
        const { token } = query;
        const usersCollection = dbase.collection('users');
        usersCollection.findOneAndUpdate({
            _id: ObjectID(token),
            isDeleted: false
        },{
            $set:{
                isDeleted:true
            }
        }, null,(err, sessions)=>{
            if (err) {
                console.log(err);
                return res.send({
                  success: false,
                  message: 'Error: Server error'
                });
              }
              return res.send({
                success: true,
                message: 'Logged out'
              });
        });
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

