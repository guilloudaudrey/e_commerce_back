import { Router } from "express";
import { DaoLignePanier } from "../database/dao-lignepanier";
const dao =new DaoLignePanier();
export const routerLignePanier = Router();

routerLignePanier.get('/', (req, resp)=>{
dao.getAllLignePanier().then((lignepanier)=>resp.json(lignepanier))
.catch((error) => resp.status(500).send(error))
})

routerLignePanier.get('/:id', (req, resp)=>{
    dao.getLignePanierById(req.params.id).then((lignepanier)=>resp.json(lignepanier))
    .catch((error)=>resp.status(500).send(error))
})

routerLignePanier.post('/', (req, resp)=>{
    dao.addLignePanier(req.body).then((lignepanier)=>resp.json(lignepanier))
    .catch((error)=>resp.status(500).send(error))
})

routerLignePanier.patch('/', (req, resp)=>{
    dao.modifyLignePanier(req.body).then((lignepanier)=>resp.json(lignepanier))
    .catch((error)=>resp.status(500).send(error))
})

routerLignePanier.delete('/:id', (req, resp)=>{
    dao.removeLignePanier(req.params.id).then((lignepanier)=>resp.json({success:true}))
    .catch((error)=>resp.status(500).send(error))
})