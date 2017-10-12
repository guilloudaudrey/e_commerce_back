import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

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
}