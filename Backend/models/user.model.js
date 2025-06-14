const {Schema, model} = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters or long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'First name must be at least 3 characters or long'],
        },
    },
    email:{
        type: String,
        required: true,
        // unique: true,
        minlength: [5, 'First name must be at least 3 characters or long'],
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    sockedId:{
        type: String,
    },
},
{timestamps: true}
);

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({id: this._id}, process.env.JWT_SECRERT);
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const userModel = model('User', userSchema);

module.exports = userModel;