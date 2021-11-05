import models from '../models/models';

let add = async(req, res, next) =>{
    const { name, description } = req.body;
    try {
        const data = await models.Categorie.create({
            name,
            description
        })
        res.status(200).json(data);
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let query = async(req, res, next) =>{
    let id = req.query._id
    try {
        const data = await models.Categorie.findOne({_id:id})
        if(!data){
            res.status(404).send({
                message: "Error, file does not exist"
            })
        }else {
            res.status(200).json(data);
        }
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let list = async(req, res, next) =>{
    let value = req.query.value;
    try {
        const data = await models.Categorie.find({
            $or:[{'name': new RegExp(value, 'i')},
                {'description': new RegExp(value, 'i')}]
        },{creationDate: 0})
        .sort({'creationDate':-1});//ordenamieto por valores desendentes
        res.status(200).json(data);
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let update = async(req, res, next) =>{
    let id = req.body._id;
    const { name, description } = req.body;
    try {
        const data = await models.Categorie.findOneAndUpdate({ _id:id }, {name, description})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let activate = async(req, res, next) =>{
    let id = req.body._id;
    try {
        const data = await models.Categorie.findOneAndUpdate({_id:id}, {state:1})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let desactivate = async(req, res, next) =>{
    let id = req.body._id;
    try {
        const data = await models.Categorie.findOneAndUpdate({_id:id}, {state:0})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let remove = async(req, res, next) =>{
    let id = req.body._id;
    try {
        const data = await modules.Categorie.findOneAndDelete({_id:id})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}


export default{
    add,
    query,
    list,
    update,
    activate,
    desactivate,
    remove
}