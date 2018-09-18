const User = require('../models/user.model.js');
const UserReg= require('../models/reg.model.js');

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    //console.log(req.body);

    // Create a Note
    const user = new User({
        name: req.body.fullName,
        email: req.body.email,
        mobile: req.body.mobile,
        user_type: req.body.userType,
        profile_pic: req.body.profileImg
    });

    // Save User in the database
    user.save()
    .then(data => {
        const userReg = new UserReg({
            user_id: data._id,
            pass: req.body.pass,
            devices_id: req.body.devices_id
        });
        userReg.save().then(regData => {
            res.send();
        });
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single user with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "No user found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "No User found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request

    // Find note and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.fullName,
        email: req.body.email,
        mobile: req.body.mobile,
        user_type: req.body.userType,
        profile_pic: req.body.profileImg
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
};