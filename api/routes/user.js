//----importing packages
const express = require('express');

//const multer = require('multer');
const router = express();

//----importing models files in routes
const User = require('../models/user');

//---importing controllers --------
const UserController = require('../controllers/user');

//----multer code ----
/*const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    Reject a File
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } 
    else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter
});*/

//----GET request for all Users
//router.get('/', UserController.user_get_all);


//----POST request for to CREATE the user
router.post('/', UserController.user_create_user);

//----GET request for individual User----
//router.get('/:userId', UserController.user_get_user);

//----PATCH request for all User----
//router.patch("/:userId", UserController.user_update_user);

//----DELETE request for all User----
//router.delete('/:userId', UserController.user_delete_user);

//----exporting the module----
module.exports = router;