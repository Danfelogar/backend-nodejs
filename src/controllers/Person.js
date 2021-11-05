import models from "../models/models";


let add = async(req,res,next) =>{
    const { type_person,name,type_document,num_document,address,phone,email } = req.body;

    try {
        const data = await models.Person.create({
            type_person,
            name,
            type_document,
            num_document,
            address,
            phone,
            email
        })
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
        const data = await models.Person.findOne({ _id: id });
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
        const data = await models.Person.find({
            $or:[{'name': new RegExp(value, 'i')},
            {'email': new RegExp(value, 'i')}]
        },{creationDate: 0})
        .sort({'creationDate':-1})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Process error"
        })
        next(e);
    }
}

let listCustomer = async(req,res,next) =>{
    let value = req.query.value;
    try {
        const data = await models.Person.find({
            $or:[{'name': new RegExp(value, 'i')},
            {'email': new RegExp(value, 'i')}],
            'type_person': 'Customer',
        },{creationDate: 0})
        .sort({'creationDate':-1})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Process error"
        })
        next(e);
    }
}

let listProvider = async(req,res,next) =>{
    let value = req.query.value;
    try {
        const data = await models.Person.find({
            $or:[{'name': new RegExp(value, 'i')},
            {'email': new RegExp(value, 'i')}],
            'type_person': 'Provider',
        },{creationDate: 0})
        .sort({'creationDate':-1})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Process error"
        })
        next(e);
    }
}

let update = async(req,res,next) =>{
    let id = req.body._id;
    const { type_person,name,type_document,num_document,address,phone,email  } = req.body;
    try {
        const data = await models.Person.findOneAndUpdate({_id:id},{
            type_person,
            name,
            type_document,
            num_document,
            address,
            phone,
            email
        })
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
        const data = await models.Person.findOneAndUpdate({_id:id},{state:1})
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
        const data = await models.Person.findOneAndUpdate({_id:id},{state:0})
        res.status(200).json(data);
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let remove = async(req, res, next) =>{
    let id = req.body._id;
    try{
        const data = await models.Person.findOneAndDelete({_id:id})
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
    listCustomer,
    listProvider,
    update,
    activate,
    desactivate,
    remove
}