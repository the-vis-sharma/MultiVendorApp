//user.routes.js

module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Create a new Note
    app.post('/AddUser', user.create);

    // Retrieve all user
    app.get('/GetUsers', user.findAll);

    // Retrieve a single Note with noteId
    app.get('/GetUser/:userId', user.findOne);

    // Update a Note with noteId
    app.post('/UpdateUser/:userId', user.update);

    // Delete a Note with noteId
    app.post('/DeleteUser/:userId', user.delete);
}