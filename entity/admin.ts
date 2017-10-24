import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";


@Entity()
export class Admin {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    pseudo: string;

    @Column({
        length: 30
    })
    password: string;

    @Column("text")
    token: string;
}