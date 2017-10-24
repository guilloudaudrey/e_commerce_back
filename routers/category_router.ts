import { Router } from "express";
import { DaoCategory } from "../database/dao-category";


const dao =new DaoCategory();
export const routerCat = Router();

routerCat.get('/', (req, resp)=>{
dao.getAllCats().then((cats)=>resp.json(cats))
.catch((error) => resp.status(500).send(error))
})

routerCat.get('/:id', (req, resp)=>{
    dao.getCatById(req.params.id).then((cat)=>resp.json(cat))
    .catch((error)=>resp.status(500).send(error))
})

routerCat.post('/', (req, resp)=>{
    dao.addCat(req.body).then((cat)=>resp.json(cat))
    .catch((error)=>resp.status(500).send(error))
})

routerCat.patch('/', (req, resp)=>{
    dao.modifyCat(req.body).then((cat)=>resp.json(cat))
    .catch((error)=>resp.status(500).send(error))
})

routerCat.delete('/:id', (req, resp)=>{
    dao.removeCat(req.params.id).then((cat)=>resp.json({success:true}))
    .catch((error)=>resp.status(500).send(error))
})