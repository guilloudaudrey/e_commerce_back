import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    nom: string;

    @Column({
        length: 100
    })
    prenom: string;

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