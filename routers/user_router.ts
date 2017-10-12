import { Router } from "express";
import { DaoUser } from "../database/dao-user";

const dao = new DaoUser();

export const routerUser = Router();

routerUser.get('/', (req,resp) => {
    dao.getAllDogs().then((dogs) => resp.json(dogs))
    .catch((error) => resp.status(500).send(error));
});

routerUser.get('/:id', (req,resp) => {
    dao.getDogById(req.params.id).then((dog) => resp.json(dog))
    .catch((error) => resp.status(500).send(error));;
});

routerUser.post('/', (req,resp)=> {
    dao.addDog(req.body).then(dog => resp.json(dog))
    .catch((error) => resp.status(500).send(error));;
});

routerUser.patch('/', (req,resp)=> {
    dao.modifyDog(req.body).then(dog => resp.json(dog))
    .catch((error) => resp.status(500).send(error));;
});

routerUser.delete('/:id', (req,resp)=> {
    dao.removeDog(req.params.id).then(dog => resp.json(dog))
    .catch((error) => resp.status(500).send(error));;
});