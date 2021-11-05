import models from '../models/models';
import helpers from './helpers';
import token from '../services/token'

let add = async(req, res, next) =>{
    const {rol,name,type_document,num_document,address,phone,email,Password} = req.body;
    const password = await helpers.encryptPassword(Password);
    try {
        const data = await models.User.create({
            rol,
            name,
            type_document,
            num_document,
            address,
            phone,
            email,
            password
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
    let  id = req.query._id;
    try {
        const  data = await models.User.findOne({_id:id})
        if (!data) {
            res.status(404).send({
                message: "Error the file does not exist"
            })
        } else {
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
        const data = await models.User.find({
            $or:[{'name': new RegExp(value,'i')},
            {'email': new RegExp(value,'i')}]
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
    const id = req.body._id;
    const {rol,name,type_document,num_document,address,phone,email,Password, state} = req.body;
    const reg = await models.User.findOne({_id:id});
    const password = '';
    try {
        if (Password != reg.password) {
            password = await helpers.encryptPassword(Password);
        } else {
            password = Password;
        }
        const data =  await models.User.findOneAndUpdate({_id:id},{
            rol,
            name,
            type_document,
            num_document,
            address,
            phone,
            email,
            password,
            state
        })
        res.status(200).json(data);
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let activate = async(req, res, next) =>{
    const id = req.body._id;
    try {
        const data = await models.User.findOneAndUpdate({_id:id},{state:1})
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
        const data = await models.User.findOneAndUpdate({_id:id},{state:0})
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
        const data = await models.User.findByIdAndDelete({_id:id})
        res.status(200).json(data);
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let login = async (req, res,  next)=>{
    const{email,Password} = req.body;
    try{
        let user = await models.User.findOne({email: email, state:1})
        if (user) {
            let match = await helpers.matchPassword(Password, user.password);
            if (match) {
                let TokenReturn = await token.encode(user._id);
                res.status(200).json(user,TokenReturn)
            } else {
                res.status(404).send({
                    message: 'Process error'
                })
            }
        } else {
            res.status(404).send({
                message: 'Username does not exist'
            })
        }
        res.status(200).json(data);
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
    remove,
    login
}