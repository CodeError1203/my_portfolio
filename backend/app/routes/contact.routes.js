const { contact } = require('../models')

module.exports = (app) =>{
    const contact = require('../controllers/contact.controllers')

    var router = require('express').Router()
    

    //Create a new contact
     router.post('/create-contact',contact.create)
    
    // Retrieve all contact
    router.get('/',contact.findAll)

    // Regrieve a single contact with id
     router.get('/edit-contact/:id',contact.findOne)

    //Update a contact with id
    router.put('/update-contact/:id',contact.update)

    // Delete a contact with id
     router.delete('/delete-contact/:id',contact.delete)

    app.use('/contact',router)
}