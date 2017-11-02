import { Repository, getConnection } from "typeorm";
import { Brand } from "../entity/brand";

export class DaoBrand {

    private getRepo():Repository<Brand>{
return getConnection().getRepository(Brand);

    }

 

    getAllBrands():Promise<Brand[]>{
      
        return this.getRepo().find();
    }

    getBrandById(id:number):Promise<Brand>{
        return this.getRepo().findOneById(id);
    }

    addBrand(brand:Brand):Promise<Brand>{
        return this.getRepo().save(brand);
    }

    removeBrand(id:number):Promise<any>{
        return this.getRepo().removeById(id);
    }

    modifyBrand(brand:Brand):Promise<void>{
        return this.getRepo().updateById(brand.id, brand);
    }
}