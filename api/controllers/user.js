//----importing mongoose package----
const mongoose = require('mongoose');

//----importing models file -----
const User = require('../models/user');


//----GET request for all Users----
/*exports.user_get_all = (req, res, next) => {
    User
    .find()
    .select("name address _id productImage")
    .exec()
    .then(doc => {
        const response = {
            count : doc.length,
            users : doc.map(newres => {
                return {
                    name : newres.name, 
                    address : newres.address,
                    _id : newres._id,
                    productImage : newres.productImage,
                    request : {
                        type : 'GET',
                        url : 'http://localhost:3000/user/' + newres._id
                    }
                }
            })
        };
        res.status(200).json(response);
    })
    
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
};*/

//----Routing to CREATE the user----
exports.user_create_user = (req, res, next) => {
   
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    user
        .save()
        .then(result => {
            res.status(200).json({
            message: "User Successfully Created",
            user: user
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });


};

//----GET request for individual User----
/*exports.user_get_user = (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
    .select('name address _id productImage')
     .exec()
     .then(doc => {
        console.log("From database",doc);
        if (doc) {
        res.status(200).json({
            user: doc,
            request: {
                type: 'GET',
                url: 'http://localhost:3000/user'
            }
        });
        }else{
            res.status(404).json({message: 'No valid entry found for provided Id'});
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: err}); 
    });
};

//----PATCH request for all User----
exports.user_update_user = (req, res, next) => {
    const id = req.params.userId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    };
    User.update({ _id: id}, { $set: updateOps })
    .exec()
    .then(result => { 
       console.log(result);
       res.status(200).json({
           message: 'User updated',
           request: {
               type: 'GET',
               url: 'http://localhost:3000/user/' + id
           }
       });
   })
   .catch(err => {
       console.log(err)
       res.status(500).json({
           error: err
       }); 
   });
};

//----DELETE request for all User----
exports.user_delete_user = (req, res, next) => {
    const id = req.params.userId;
    User.remove({ _id: id})
     .exec()
     .then(result => { 
        res.status(200).json({
            message: 'User deleted',
            request: {
                type: 'POST',
                url: 'http://localhost:3000/user/',
                body: { name: 'String', address: 'String'}
            }
        });
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        }); 
    });
};*/