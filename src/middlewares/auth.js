import tokenServer from '../services/token';

let verifyUser = async(req,res,next)=>{
    if (!req.headers.token) {
        return res.status(404).send({
            message: 'Error you do not have a toke-user'
        });
    }
    const resp = await tokenServer.decode(req.headers.token)
    if (resp.rol === 'Admin' || resp.rol === 'Seller' || resp.rol === 'Storer') {
        next();
    } else {
        return res.status(403).send({
            message: 'Unauthorized error'
        });
    }
}

let verifyUserAdmin = async(req,res,next)=>{
    if (!req.headers.token) {
        return res.status(404).send({
            message: 'Error you do not have a toke-user'
        });
    }
    const resp = await tokenServer.decode(req.headers.token)
    if (resp.rol === 'Admin') {
        next();
    } else {
        return res.status(403).send({
            message: 'Unauthorized error'
        });
    }
}

let verifyUserStorer = async(req,res,next)=>{
    if (!req.headers.token) {
        return res.status(404).send({
            message: 'Error you do not have a toke-user'
        });
    }
    const resp = await tokenServer.decode(req.headers.token)
    if (resp.rol === 'Admin' || resp.rol === 'Storer') {
        next();
    } else {
        return res.status(403).send({
            message: 'Unauthorized error'
        });
    }
}

let verifyUserSeller = async(req,res,next)=>{
    if (!req.headers.token) {
        return res.status(404).send({
            message: 'Error you do not have a toke-user'
        });
    }
    const resp = await tokenServer.decode(req.headers.token)
    if (resp.rol === 'Admin' || resp.rol === 'Seller') {
        next();
    } else {
        return res.status(403).send({
            message: 'Unauthorized error'
        });
    }
}

export default{
    verifyUser,
    verifyUserAdmin,
    verifyUserStorer,
    verifyUserSeller
}