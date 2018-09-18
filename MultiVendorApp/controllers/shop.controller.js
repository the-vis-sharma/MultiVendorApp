const Shop = require('../models/shop.model.js');

// Create and Save a new shop
exports.create = (req, res) => {
    // Validate request
    //console.log(req.body);

    // Create a Note
    const shop = new Shop({
        name: req.body.shopName,
        categories: req.body.shopCat,
        logo: req.body.shopLogo,
        cover_img: req.body.shopCoverImg,
        open_time: req.body.openTime,
        close_time: req.body.closeTime,
        edt: req.body.edt,
        types: req.body.foodTypes,              //like veg, non-veg
        shopkeeper_id: req.body.shopkeeperId
    });

    // Save User in the database
    shop.save()
    .then(data => {
        res.send();
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while adding the shop."
        });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    Shop.find()
    .then(shops => {
        res.send(shops);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving shops."
        });
    });
};

// Find a single user with a userId
exports.findOne = (req, res) => {
    Shop.findById(req.params.shopId)
    .then(shop => {
        if(!shop) {
            return res.status(404).send({
                message: "No shop found with id " + req.params.shopId
            });            
        }
        res.send(shop);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "No shop found with id " + req.params.shopId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving shop with id " + req.params.shopId
        });
    });
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request

    // Find note and update it with the request body
    Shop.findByIdAndUpdate(req.params.shopId, {
        categories: req.body.shopCat,
        logo: req.body.shopLogo,
        cover_img: req.body.shopCoverImg,
        open_time: req.body.openTime,
        close_time: req.body.closeTime,
        edt: req.body.edt,
        types: req.body.foodTypes,              //like veg, non-veg
    }, {new: true})
    .then(shop => {
        if(!shop) {
            return res.status(404).send({
                message: "Shop not found with id " + req.params.shopId
            });
        }
        res.send(shop);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Shop not found with id " + req.params.shopId
            });                
        }
        return res.status(500).send({
            message: "Error updating shop with id " + req.params.shopId
        });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.shopId)
    .then(shop => {
        if(!shop) {
            return res.status(404).send({
                message: "shop not found with id " + req.params.shopId
            });
        }
        res.send({message: "Shop deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Shop not found with id " + req.params.shopId
            });                
        }
        return res.status(500).send({
            message: "Could not delete shop with id " + req.params.shopId
        });
    });
};