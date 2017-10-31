import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToMany} from "typeorm";
import {Product} from './product'
import { User } from "./user";
import { LignePanier } from "./ligne_panier";

@Entity()
export class Basket {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    @OneToMany(type => LignePanier, lignespanier => lignespanier.product)
    lignespanier: LignePanier;

    @ManyToMany( type => Product, product => product.baskets)
    products: Product[];

}