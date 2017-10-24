import { Router } from "express";
import { DaoAdmin } from "../database/dao-admin";


const dao = new DaoAdmin();

export const routerAdmin = Router();

routerAdmin.get('/', (req,resp) => {
    dao.getAllAdmins().then((admins) => resp.json(admins))
    .catch((error) => resp.status(500).send(error));
});

routerAdmin.get('/:id', (req,resp) => {
    dao.getAdminById(req.params.id).then((admin) => resp.json(admin))
    .catch((error) => resp.status(500).send(error));;
});

routerAdmin.post('/', (req,resp)=> {
    dao.addAdmin(req.body).then(admin => resp.json(admin))
    .catch((error) => resp.status(500).send(error));;
});

routerAdmin.patch('/', (req,resp)=> {
    dao.modifyAdmin(req.body).then(admin => resp.json(admin))
    .catch((error) => resp.status(500).send(error));;
});

routerAdmin.delete('/:id', (req,resp)=> {
    dao.removeAdmin(req.params.id).then(admin => resp.json(admin))
    .catch((error) => resp.status(500).send(error));;

});



