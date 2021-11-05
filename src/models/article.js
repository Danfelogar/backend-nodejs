import { Schema, model } from 'mongoose';

const ArticleSchema = new Schema({
    category: {type:Schema.ObjectId, ref:'categoriesschema'},
    code: {type:String, maxlength:60,unique:true,required:true},
    name: {type:String, maxlength:60,unique:true,required:true},
    description: {type:String, maxlength:255,required:true},
    sale_price: {type:Number,required:true},
    stock: {type:Number,required:true},
    state: {type:Number, default:1},
    creationDate: {type:Date, default: Date.now}
})

const Article = model('articleschema', ArticleSchema);
export default Article;