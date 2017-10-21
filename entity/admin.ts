import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";


@Entity()
export class User {

    constructor(pseudo:string, mdp:string){
        this.pseudo = pseudo;
        this.mdp = mdp;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    pseudo: string;


    @Column({
        length: 30
    })
    mdp: string;

}