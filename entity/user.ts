import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Contact} from './contact'

@Entity()
export class User {

    constructor(pseudo:string, email:string, mdp:string){
        this.pseudo = pseudo;
        this.email = email;
        this.mdp = mdp;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    pseudo: string;

    @Column({
        length: 100
    })
    email: string;

    @Column({
        length: 30
    })
    mdp: string;

    @Column("date")
    dateinscription: Date;

    @OneToMany( type => Contact, contact => contact.user)
    contact: Contact[];
}