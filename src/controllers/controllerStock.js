import models from "../models/models";

const stockIncrease = async(id_article,amount )=>{
    let {stock} = await models.Article.findOne({_id: id_article})
    let newStock = parseInt(stock) + parseInt( amount )
    const data =  await models.Article.findByIdAndUpdate({_id: id_article}, {stock: newStock})
}


const stockDecrease = async(id_article,amount )=>{
    let {stock} = await models.Article.findOne({_id: id_article})
    let newStock = parseInt(stock) - parseInt( amount )
    const data =  await models.Article.findByIdAndUpdate({_id: id_article}, {stock: newStock})
}

export default{
    stockIncrease,
    stockDecrease
}