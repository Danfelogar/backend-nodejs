import models from '../models/models';

let add = async(req, res, next) =>{
    const { category, code,name, description, sale_price, stock } = req.body;
    try {
        const data = await models.Article.create({
            category,
            code,
            name,
            description,
            sale_price,
            stock
        })
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let query = async(req, res, next) =>{
    let id = req.body._id;
    try {
        const data = await models.Article.findOne({_id:id})
        //ordenamos pormedio del articulo y el id
        .populate('category', {name:1});
        if (!data) {
            res.status(404).send({
                message: 'Error the file does not exist'
            })
        }else{
            res.status(200).json(data)
        }
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let queryCode = async(req, res, next) =>{
    let code = req.body.code;
    try {
        const data = await models.Article.findOne({code:code})
        //ordenamos pormedio del articulo y el id
        .populate('category', {name:1});
        if (!data) {
            res.status(404).send({
                message: 'Error the file does not exist'
            })
        }else{
            res.status(200).json(data)
        }
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let list = async(req, res, next) =>{
    const value = req.query.value;
    try {
        const data = await models.Article.find({
            //esto se interpreta como partir de una busqueda
            $or:[{'name':RegExp(value, 'i')},
            {'discription':RegExp(value, 'i')}]
        },{creationDate:0})
        .populate('category',{name:1})
        .sort({'creationDate':-1});
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let update = async(req, res, next) =>{
    const id = req.body._id;
    const {code,name, description, sale_price, stock } = req.body;
    try {
        const data = await models.Article.findOneAndUpdate({_id:id},{
            code,
            name,
            description,
            sale_price,
            stock
        })
        res.status(200).json(data)
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
        const data = await models.Article.findOneAndUpdate({_id:id},{state:1})
        res.status(200).json(data)
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
        const data = await models.Article.findOneAndUpdate({_id:id},{state:0})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: 'Error in the process'
        })
        next(e)
    }
}

let remove = async(req, res, next) =>{
    const id = req.body._id;
    try {
        const data = await models.Article.findByIdAndDelete({_id:id})
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
    queryCode,
    list,
    update,
    activate,
    desactivate,
    remove
}