const express = require('express');
const router = express.Router();
//importing the schema to create APIs
const Contact = require('../models/contact');

//Retreiving Data
router.get('/contacts', (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    });
});

//Add Data
router.post('/contacts', (req, res, next)=>{
    let newContact = new Contact({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    phone : req.body.phone,
    
});

    newContact.save((err)=>{
        if(err)
        {
            res.json({msg: 'Failed to add contact'});
            console.log("ADD Error: "+err);
        }

        else{
            res.json({msg: 'Contact added successfully'});
        }
    });
});

//delete data

router.delete('/contacts/:id', (req, res, next)=>{
    
Contact.remove({_id: req.params.id}, function(err, result){
    if(err)
    {
        res.json(err);
    }
    else
    {
        res.json(result);
    }
});
});
module.exports = router;