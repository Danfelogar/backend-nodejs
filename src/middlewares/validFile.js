import { validationResult } from "express-validator";

let validFiel = async(req,res,next) =>{
    const err = await validationResult(req)
    if(!err.isEmpty()) {
        return res.status(404).json(err)
    }
    next();
}

export default{
    validFiel
}