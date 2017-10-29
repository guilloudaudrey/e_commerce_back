import { Router } from "express";
import { DaoUser } from "../database/dao-user";

const dao = new DaoUser();

export const routerUser = Router();

routerUser.get('/', (req,resp) => {
    dao.getAllUsers().then((users) => resp.json(users))
    .catch((error) => resp.status(500).send(error));
});

routerUser.get('/:id', (req,resp) => {
    dao.getUserById(req.params.id).then((user) => resp.json(user))
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
    dao.removeUser(req.params.id).then(user => resp.json({success:true}))
    .catch((error) => resp.status(500).send(error));
});


routerUser.post('/authenticate', (req, resp)=> {
    dao.checkUser(req.body.pseudo).then(user => resp.json(user))
    .catch((error) => resp.status(500).send(error))
    })



// routerUser.post('/authenticate', (req, resp)=>{
//     userService.authenticate(req.body.username, req.body.password)
//     .then((user) {
//         if (user) {
//             // authentication successful
//             resp.send(user);
//         } else {
//             // authentication failed
//             resp.status(400).send('Username or password is incorrect');
//         }
//     })
//     .catch(function (err) {
//         resp.status(400).send(err);
// });
// });




