import models from "../models/models";
import controler from './controllerStock';



let add = async(req,res,next) =>{
    const { user,person,check_type,voucher_series,tax,total,detail } = req.body;

    try {
        const data = await models.Entry.create({
            user,
            person,
            check_type,
            voucher_series,
            tax,
            total,
            detail
        })
        let details = req.body.detail;//estar dentro de detalles
        details.map((x)=>{
            controler.stockDecrease(x._id, x.amount)
        })//para disminuir el stock
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Process error"
        })
        next(e);
    }
}

let query = async(req,res,next) =>{
    let id = req.query._id;
    try {
        const data = await models.Entry.findOne({ _id: id })
        .populate('user', {name:1})
        .populate('person', {name:1})
        if(!data){
            res.status(404).send({
                message: "The record does not exist"
            })
        }else{
            res.status(200).json(data)
        }
    } catch (e) {
        res.status(500).send({
            message: "Process error"
        })
        next(e);
    }
}

let list = async(req,res,next) =>{
    let value = req.query.value;
    try {
        const data = await models.Entry.find({
            $or:[{'voucher_series': new RegExp(value, 'i')}]
        })
        .populate('user', {name:1})
        .populate('person', {name:1})
        .sort({'creationDate':-1})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Process error"
        })
        next(e);
    }
}

let activate = async(req, res, next) =>{
    const id = req.body._id;
    try {
        const data = await models.Entry.findOneAndUpdate({_id:id},{state:1})
        let details = data.detail;
        details.map((x)=>{
            controler.stockIncrease(x._id,x.amount)
        })
        res.status(200).json(data);
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let desactivate = async(req, res, next) =>{
    const id = req.body._id;
    try {
        const data = await models.Entry.findOneAndUpdate({_id:id},{state:0})
        let details = data.detail;
        details.map((x)=>{
            controler.stockDecrease(x._id,x.amount)
        })
        res.status(200).json(data);
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let annualGraph = async(req, res, next) =>{
    try {
        const data = await models.Entry.aggregate([
            {
                $group:{
                    _id: {
                        month: {$month: '$creationDatea'},
                        year: {$year: '$creationDatea'}
                    },
                    total: {$sum: '$total'},
                    number: {$sum:1}
                }
            },
            {
                $sort:{
                    "_id.year":-1,
                    "_id.month":-1
                }
            }
        ]).limit(12)
        res.status(200).json(data);
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let checkDate = async(req, res, next) =>{
    let {value, end} = req.query;
    try {
        const data = await models.Entry.find({
            '$creationDatea': {"$gte":value, "$lt":end}
        })
        .populate('user', {name:1})
        .populate('person', {name:1})
        .sort({'creationDate':-1})
        res.status(200).json(data);
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

export default {
    add,
    query,
    list,
    activate,
    desactivate,
    annualGraph,
    checkDate
}