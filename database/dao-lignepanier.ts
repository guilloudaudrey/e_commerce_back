import { Product } from "../entity/product";
import { createConnection, Repository, getConnection } from "typeorm";
import { LignePanier } from "../entity/ligne_panier";
import { Basket } from "../entity/basket";


export class DaoLignePanier {

    private getRepo(): Repository<LignePanier> {
        return getConnection().getRepository(LignePanier);        
    }
    getAllLignePanier(): Promise<LignePanier[]> {
        return this.getRepo().find();
    }
    
    getLignePanierById(id: number): Promise<LignePanier> {
        return this.getRepo().findOneById(id);
    }

    addLignePanier(lignepanier: LignePanier): Promise<LignePanier> {
        return this.getRepo().save(lignepanier);
    }

    removeLignePanier(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }

    modifyLignePanier(lignepanier: LignePanier): Promise<void> {
        return this.getRepo().updateById(lignepanier.id,lignepanier);
    }

    getLignePanierByBasket(basketId:number):Promise<LignePanier[]>{
        return this.getRepo().find({ where: {basketId:basketId}});
    }
}