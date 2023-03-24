const db = require('../models')
const contact = db.contact

exports.create = (req,res) => {
    if(!req.body.avdive){
        res.status(400).json({message:"content can not be emtry!"})
        return;
    }

    //create a student
    const contact = new contact(
        {             
        name: req.body.name,
        email: req.body.email,
        message:req.body.message
        
        }
    );
        contact
        .save(contact)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500)
            .json({message:err.message || "Some error occurred while creating the student."})
        })

}

exports.findAll = (req,res) => {
    contact.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500)
            .json({message:err.message || "Some error occurred while creating the contact."})
        })
}

exports.findOne = (req,res) =>{
    const id = req.params.id

    contact.findById(id)
    .then(data => {
        if(!data){
            res.status(404).json({message:"Not found!"})
        }
        else{
            res.json(data)
        }
    })
    .catch(err => {
        res.status(500).json({message:"Error retrieving data!"})
    })
}

exports.update = (req,res) => {
    if(!req.body){
        return res.status(400).json({
            message: "Data to update cannot be empty!"
        })
    }
    const id = req.params.id

    contact.findByIdAndUpdate(id, req.body,{useFindAndModify : false})
    .then(data => {
        if(!data){
            res.status(404).json({
                message: `Cannot update data with id=${id}`
            })
        }
        else{
                res.json({message: "Data was updated successfully."})
            }
        
    })
    .catch(err => {
        res.status(500).json({message:"Error updating data!"})
    })
}

exports.delete= (req,res) => {
    const id = req.params.id

    contact.findByIdAndRemove(id , {useFindAndModify : false} )
    .then(data => {
        if(!data){
            res.status(404).json({
                message: `Cannot delete data with id=${id}`
            })
        }
        else{
                res.json({message: "Data was deleted successfully."})
            }
    })
    .catch(err => {
        res.status(500).json({message:"Cannot delete data!"})
    })
}