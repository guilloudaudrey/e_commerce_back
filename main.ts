import 'reflect-metadata';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import {User} from './entity/user'
import { createConnection } from 'typeorm';

createConnection(
    {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "admin1",
        password: "simplon",
        database: "e_commerce",
        entities: [
            User
        ],
        synchronize: true,
        logging: false
    }
    
).then(connection =>{console.log('A')}).catch(error => console.log(error));;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));



app.listen(3000, ()=>console.log('listening on port 3000'));