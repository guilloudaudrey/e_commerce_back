import { Router } from "express";
import { DaoProduct } from "../database/dao-product";


const dao = new DaoProduct();

export const routerProduct = Router();

routerProduct.get('/', (req,resp) => {
    dao.getAllProducts().then((products) => resp.json(products))
    .catch((error) => resp.status(500).send(error));
});

routerProduct.get('/:id', (req,resp) => {
    dao.getProductById(req.params.id).then((product) => resp.json(product))
    .catch((error) => resp.status(500).send(error));;
});

routerProduct.post('/', (req,resp)=> {
    dao.addProduct(req.body).then(product => resp.json(product))
    .catch((error) => resp.status(500).send(error));;
});

routerProduct.patch('/', (req,resp)=> {
    dao.modifyProduct(req.body).then(product => resp.json(product))
    .catch((error) => resp.status(500).send(error));;
});

routerProduct.delete('/:id', (req,resp)=> {
    dao.removeProduct(req.params.id).then(product => resp.json(product))
    .catch((error) => resp.status(500).send(error));;
});



