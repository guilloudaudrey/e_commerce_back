import { User } from "../entity/user";
import { createConnection, Repository, getConnection } from "typeorm";


export class DaoUser {

    private getRepo(): Repository<User> {
        return getConnection().getRepository(User);
            
    }
    getAllDogs(): Promise<User[]> {
        return this.getRepo().find();
    }
    getDogById(id: number): Promise<User> {
        return this.getRepo().findOneById(id);
    }
    addDog(user: User): Promise<User> {
        return this.getRepo().save(user);
    }
    removeDog(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyDog(user: User): Promise<void> {
        return this.getRepo().updateById(user.id,user);
    }

}