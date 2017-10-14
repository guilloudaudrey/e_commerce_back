import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import {User} from './entity/user';
import {Product} from './entity/product';
import {routerUser} from './routers/user_router'

createConnection();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});

app.use('/user', routerUser);

app.listen(3000, ()=>console.log('listening on port 3000'));


// createConnection(
//     {
//             type: "mysql",
//         host: "localhost",
//         port: 3306,
//         username: "admin1",
//         password: "simplon",
//         database: "e_commerce",
//         entities: [
//             __dirname + "/entity/*.ts"
//         ],
//         synchronize: true,
//         logging: false
//     }
    
// ).then(connection =>{console.log('A')}).catch(error => console.log(error));;


// createConnection(    {
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "admin1",
//     password: "simplon",
//     database: "e_commerce",
//     entities: [
//         User
//     ],
//     synchronize: true,
//     logging: false
// }).then(connection => {
    
//         let user = new User();
//         user.nom = "Guilloud";
//         user.prenom = "Audrey";
//         user.email = "audreyguilloud@yahoo.fr";
//         user.mdp = "simplon";
//         user.dateinscription = new Date();
    
//         return connection.manager
//                 .save(user)
//                 .then(user => {
//                     console.log("user has been saved. user id is", user.id);
//                 });
    
//     }).catch(error => console.log(error));

