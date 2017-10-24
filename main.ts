import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import {User} from './entity/user';
import {Product} from './entity/product';
import {routerUser} from './routers/user_router'
import { routerBrand } from './routers/brand_router';
import { routerCat } from './routers/category_router';
import { routerProduct } from './routers/product_router';
import { routerAdmin } from './routers/admin_router';

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
app.use('/brand', routerBrand);
app.use('/category', routerCat)
app.use('/product', routerProduct)
app.use('/admin', routerAdmin)

app.listen(3000, ()=>console.log('listening on port 3000'));


