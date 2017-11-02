import { Router } from "express";
import { DaoBasket } from "../database/dao-basket";

const dao = new DaoBasket();

export const routerBasket = Router();

routerBasket.get('/', (req,resp) => {
    dao.getAllBaskets().then((baskets) => resp.json(baskets))
    .catch((error) => resp.status(500).send(error));
});

routerBasket.get('/:id', (req,resp) => {
    dao.getBasketById(req.params.id).then((basket) => resp.json(basket))
    .catch((error) => resp.status(500).send(error));
});

routerBasket.post('/', (req,resp)=> {
    console.log(resp, req)
    dao.addBasket(req.body).then(basket => resp.json(basket))
    .catch((error) => resp.status(500).send(error));
});

routerBasket.patch('/', (req,resp)=> {
    dao.modifyBasket(req.body).then(basket => resp.json(basket))
    .catch((error) => resp.status(500).send(error));
});

routerBasket.delete('/:id', (req,resp)=> {
    dao.removeBasket(req.params.id).then(basket => resp.json(basket))
    .catch((error) => resp.status(500).send(error));
});



