import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany} from "typeorm";
import {Category} from './category'
import { User } from "./user";
import { Product } from "./product";
import { Basket } from "./basket";

@Entity()
export class LignePanier {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price:number;

    @ManyToOne(type => Basket, basket => basket.lignespanier, { eager: true})
    basket: Basket;

    @ManyToOne(type => Product, product => product.lignespanier, { eager: true})
    product: Product[];
}
