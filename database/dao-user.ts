// import { User } from "../entity/user";
// import { createConnection, Repository, getConnection } from "typeorm";


// export class DaoUser {

//     private getRepo(): Repository<User> {
//         return getConnection().getRepository(User);        
//     }
//     getAllUsers(): Promise<User[]> {
//         return this.getRepo().find();
//     }
//     getUserById(id: number): Promise<User> {
//         return this.getRepo().findOneById(id);
//     }
//     addUser(user: User): Promise<User> {
//         return this.getRepo().save(user);
//     }
//     removeUser(id:number): Promise<any> {
//         return this.getRepo().removeById(id);
//     }
//     modifyUser(user: User): Promise<void> {
//         return this.getRepo().updateById(user.id,user);
//     }

// }