import { Repository, getConnection } from "typeorm";
import { Brand } from "../entity/brand";
import { Category } from "../entity/category";

export class DaoCategory{
    private getRepo():Repository<Category>{
        return getConnection().getRepository(Category);
    }

    getAllCats():Promise<Category[]>{
        return this.getRepo().find();
    }

    getCatById(id:number):Promise<Category>{
        return this.getRepo().findOneById(id);
    }

    addCat(cat:Category):Promise<Category>{
        return this.getRepo().save(cat);
    }

    removeCat(id:number):Promise<any>{
        return this.getRepo().removeById(id);
    }

    modifyCat(cat:Category):Promise<void>{
        return this.getRepo().updateById(cat.id, cat);
    }


}