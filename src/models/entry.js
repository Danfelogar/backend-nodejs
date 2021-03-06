import { Schema, model } from 'mongoose';

const EntrySchema = new Schema({
    user:{ type:Schema.ObjectId, ref:'userschema', required:true},
    person:{ type:Schema.ObjectId, ref:'personschema', required:true},
    check_type:{ type:String, maxlength:30, required:true },
    voucher_series:{ type:String, maxlength:30, required:true },
    tax:{ type:Number, required:true },
    total:{ type:Number, required:true },
    detail:[{
        _id:{type:String, required:true},
        article:{type:String, required:true},
        amount:{type:Number, required:true},
        price:{type:Number, required:true}
    }],
    state:{ type:Number, default:1 },
    creationDate:{ type:Date, default:Date.now }
})

const Entry = model('entryschema', EntrySchema);

export default Entry;