import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    rol:{type:String, maxlength:30, require:true},
    name:{type:String, maxlength:70, require:true},
    type_document:{type:String, maxlength:30, require:true},
    num_document:{type:Number, maxlength:15, require:true, unique:true},
    address:{type:String, maxlength:60, require:true},
    phone:{type:Number, maxlength:12, require:true, unique:true},
    email:{type:String, maxlength:30, require:true, unique:true},
    password:{type:String, maxlength:100, require:true},
    state:{ type:Number, default:1 },
    creationDate:{ type:Date, default:Date.now }
})

const User = model('userschema', UserSchema);

export default User;