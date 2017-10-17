import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToMany} from "typeorm";
import {Product} from './product'
import { User } from "./user";

@Entity()
export class Basket {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    @ManyToMany( type => Product, product => product.baskets)
    products: Product[];

}