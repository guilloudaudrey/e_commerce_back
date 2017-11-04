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

routerBasket.post('/token', (req, resp)=> {
    dao.getBasketByToken(req.body.token).then(basket=>resp.json(basket))
    .catch((error) => resp.status(500).send(error))
    })



