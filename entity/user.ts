import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm";
import {Contact} from './contact'
import { Order } from "./order";
import { Basket } from "./basket";

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

    @Column("text")
    token: string;

    @Column("date")
    dateinscription: Date;

    @OneToOne(type => Basket, basket => basket.user)
    basket: Basket;

    @OneToMany( type => Contact, contact => contact.user)
    contact: Contact[];

    @OneToMany( type => Order, order => order.user)
    orders: Order[];
}