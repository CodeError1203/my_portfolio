//const  {Schema}  = require("mongoose")

module.exports = (mongoose)=> {
    var schema = mongoose.Schema(
        {
            name:String,
            email:String,
            message:String

        },
        {
            timestamps:true
        }
       
    )
    const contact = mongoose.model('Student', schema)
    return contact
}