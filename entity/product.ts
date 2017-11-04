import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, OneToMany} from "typeorm";
import {Brand} from './brand';
import {Category} from './category'
import { Order } from "./order";
import { Basket } from "./basket";
import { LignePanier } from "./ligne_panier";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    ref: string;

    @Column({
        length: 100
    })
    name: string;

    @Column("text")
    description: string;

    @Column()
    price: number;

    @Column("date")
    datecreation: Date;

    @Column("text")
    link:string;

    @Column()
    style:string;

    @Column()
    couleur:string;

    @ManyToOne(type => Brand, brand => brand.products)
    brand: Brand;

    @ManyToOne(type => Category, category => category.products)
    category: Category;

    @ManyToMany(type => Basket, basket => basket.products)
    @JoinTable()
    baskets: Category;

    @ManyToMany(type => Order, order => order.products)
    @JoinTable()
    orders: Order[];

    @OneToMany(type => LignePanier, lignespanier => lignespanier.product)
    lignespanier: LignePanier;
}

