import { Router } from "express";
import { DaoLignePanier } from "../database/dao-lignepanier";
const dao =new DaoLignePanier();
export const routerLIgnePanier = Router();

routerLIgnePanier.get('/', (req, resp)=>{
dao.getAllLignePanier().then((lignepanier)=>resp.json(lignepanier))
.catch((error) => resp.status(500).send(error))
})

routerLIgnePanier.get('/:id', (req, resp)=>{
    dao.getLignePanierById(req.params.id).then((lignepanier)=>resp.json(lignepanier))
    .catch((error)=>resp.status(500).send(error))
})

routerLIgnePanier.post('/', (req, resp)=>{
    dao.addLignePanier(req.body).then((lignepanier)=>resp.json(lignepanier))
    .catch((error)=>resp.status(500).send(error))
})

routerLIgnePanier.patch('/', (req, resp)=>{
    dao.modifyLignePanier(req.body).then((lignepanier)=>resp.json(lignepanier))
    .catch((error)=>resp.status(500).send(error))
})

routerLIgnePanier.delete('/:id', (req, resp)=>{
    dao.removeLignePanier(req.params.id).then((lignepanier)=>resp.json({success:true}))
    .catch((error)=>resp.status(500).send(error))
})