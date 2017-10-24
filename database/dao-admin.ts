import { Request, Response} from "express";
import { createConnection, Repository, getConnection, getManager } from "typeorm";
import * as sha1 from "js-sha1";
import { Admin } from "../entity/admin";




export class DaoAdmin {

    private getRepo(): Repository<Admin> {
        return getConnection().getRepository(Admin);        
    }
    getAllAdmins(): Promise<Admin[]> {
        return this.getRepo().find();
    }
    
    getAdminById(id: number): Promise<Admin> {
        return this.getRepo().findOneById(id);
    }
    addAdmin(admin: Admin): Promise<Admin> {
        return this.getRepo().save(admin);
    }
    removeAdmin(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyAdmin(admin: Admin): Promise<void> {
        return this.getRepo().updateById(admin.id,admin);
    }

    getAdminByLogin(pseudo:string, password:string):Admin{
    return
    }

    getAdminByToken(token:string){
        return
    }


    
    




}