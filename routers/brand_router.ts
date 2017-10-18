import { Router } from "express";
import { DaoBrand } from "../database/dao-brand";

const dao =new DaoBrand();
export const routerBrand = Router();

routerBrand.get('/', (req, resp)=>{
dao.getAllBrands().then((brands)=>resp.json(brands))
.catch((error) => resp.status(500).send(error))
})

routerBrand.get('/:id', (req, resp)=>{
    dao.getBrandById(req.params.id).then((brand)=>resp.json(brand))
    .catch((error)=>resp.status(500).send(error))
})

routerBrand.post('/', (req, resp)=>{
    dao.addBrand(req.body).then((brand)=>resp.json(brand))
    .catch((error)=>resp.status(500).send(error))
})

routerBrand.patch('/', (req, resp)=>{
    dao.modifyBrand(req.body).then((brand)=>resp.json(brand))
    .catch((error)=>resp.status(500).send(error))
})

routerBrand.delete('/:id', (req, resp)=>{
    dao.removeBrand(req.params.id).then((brand)=>resp.json(brand))
    .catch((error)=>resp.status(500).send(error))
})