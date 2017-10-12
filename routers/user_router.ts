import { Router } from "express";
import { DaoUser } from "../database/dao-user";

const dao = new DaoUser();

export const routerUser = Router();

routerUser.get('/', (req,resp) => {
    dao.getAllUsers().then((users) => resp.json(users))
    .catch((error) => resp.status(500).send(error));
});

routerUser.get('/:id', (req,resp) => {
    dao.getUserById(req.params.id).then((dog) => resp.json(dog))
    .catch((error) => resp.status(500).send(error));;
});

routerUser.post('/', (req,resp)=> {
    dao.addUser(req.body).then(user => resp.json(user))
    .catch((error) => resp.status(500).send(error));;
});

routerUser.patch('/', (req,resp)=> {
    dao.modifyUser(req.body).then(user => resp.json(user))
    .catch((error) => resp.status(500).send(error));;
});

routerUser.delete('/:id', (req,resp)=> {
    dao.removeUser(req.params.id).then(user => resp.json(user))
    .catch((error) => resp.status(500).send(error));;
});