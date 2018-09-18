const UserReg= require('../models/reg.model.js');

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    UserReg.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving user login details."
        });
    });
};

// Find a single user with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "No user details found with id " + req.params.userId
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
            message: "Error retrieving user login details with user id " + req.params.userId
        });
    });
};

// Update a user identified by the userId in the request
exports.changePass = (req, res) => {
    // Validate Request

    // Find note and update it with the request body
    UserReg.findByIdAndUpdate(req.params.userId, {
        pass: req.body.pass
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
            message: "Error updating user login details with id " + req.params.userId
        });
    });
};

exports.addDeviceId = (req, res) => {
    // Validate Request

    // Find note and update it with the request body
    UserReg.findByIdAndUpdate(req.params.userId, {
        devices_id: req.body.devices_id
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
            message: "Error updating user login details with id " + req.params.userId
        });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user details with id " + req.params.noteId
        });
    });
};