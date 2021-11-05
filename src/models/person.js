import { Schema, model } from 'mongoose';

const PersonSchema = new Schema({
    type_person:{type:String, maxlength:30, required:true},
    name:{type:String, maxlength:70, required:true},
    type_document:{type:String, maxlength:30, required:true},
    num_document:{type:Number, maxlength:15, required:true, unique:true},
    address:{type:String, maxlength:60, required:true},
    phone:{type:Number, maxlength:12, required:true, unique:true},
    email:{type:String, maxlength:30, required:true, unique:true},
    state:{ type:Number, default:1 },
    creationDate:{ type:Date, default:Date.now }
})

const Person = model('personschema', PersonSchema);

export default Person;