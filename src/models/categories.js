import { Schema, model } from 'mongoose';

const CategoriesSchema = new Schema({
    name:{ type:String, maxlength:60, required:true},
    description:{ type:String, maxlength:255, required:true},
    state:{ type:Number, default:1 },
    creationDate:{ type:Date, default:Date.now }
})

const Categorie = model('categoriesschema', CategoriesSchema);

export default Categorie;