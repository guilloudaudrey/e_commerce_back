import { Product } from "../entity/product";
import { createConnection, Repository, getConnection } from "typeorm";


export class DaoProduct {

    private getRepo(): Repository<Product> {
        return getConnection().getRepository(Product);        
    }
    getAllUsers(): Promise<Product[]> {
        return this.getRepo().find();
    }
    
    getUserById(id: number): Promise<Product> {
        return this.getRepo().findOneById(id);
    }
    addUser(product: Product): Promise<Product> {
        return this.getRepo().save(product);
    }
    removeUser(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyUser(product: Product): Promise<void> {
        return this.getRepo().updateById(product.id,product);
    }

}