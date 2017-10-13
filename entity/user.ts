import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

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
}