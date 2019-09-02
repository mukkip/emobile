const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            minlength:3
        },
        password:{
            type:String,
            required:true,
            minlength:6

        },
        type:{
            type:String,
        },
        fullname:{
            type:String,
        },
        email
:
{
    type:String,
},
country
:
{
    type:String,
},
phone
:
{
    type:String,
},

}
)