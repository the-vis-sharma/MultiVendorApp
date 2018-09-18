//reg.routes.js

module.exports = (app) => {
    const user = require('../controllers/reg.controller.js');

    // Retrieve all user
    app.get('/GetRegUsers', user.findAll);

    // Retrieve a single Note with noteId
    app.get('/GetRegUser/:userId', user.findOne);

    // Update a Note with noteId
    app.post('/ChangePass/:userId', user.changePass);

    // Update a Note with noteId
    app.post('/AddDeviceId/:userId', user.addDeviceId);

    // Delete a Note with noteId
    app.post('/DeleteRegUser/:userId', user.delete);
}