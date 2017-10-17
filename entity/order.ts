import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany} from "typeorm";
import {Category} from './category'
import { User } from "./user";
import { Product } from "./product";

@Entity()
export class Order {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        length: 50
    })
    ref: string;

    @Column("date")
    dateorder: Date;
    

    @ManyToOne(type => User, user => user.orders)
    user: User;

    @ManyToOne(type => Category, category => category.products)
    category: Category;

    @ManyToMany(type => Product, product => product.orders)
    products: Product[];
}

