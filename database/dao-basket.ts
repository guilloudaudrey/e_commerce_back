import { Repository, getConnection } from "typeorm";
import { Basket } from "../entity/basket";

export class DaoBasket {

    private getRepo():Repository<Basket>{
return getConnection().getRepository(Basket);
    }

    getAllBaskets():Promise<Basket[]>{
        console.log(this.getRepo())
        return this.getRepo().find();
    }

    getBasketById(id:number):Promise<Basket>{
        return this.getRepo().findOneById(id);
    }

    addBasket(basket:Basket):Promise<Basket>{
        console.log(basket)
        return this.getRepo().save(basket);
    }

    removeBasket(id:number):Promise<any>{
        return this.getRepo().removeById(id);
    }

    modifyBasket(basket:Basket):Promise<void>{
        return this.getRepo().updateById(basket.id, basket);
    }
}