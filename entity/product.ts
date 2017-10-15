import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Brand} from './brand';
import {Category} from './category'

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
    dateinscription: number;

    @Column()
    isPublished: boolean;

    @ManyToOne(type => Brand, brand => brand.products)
    brand: Brand;

    @ManyToOne(type => Category, category => category.products)
    category: Category;
}

