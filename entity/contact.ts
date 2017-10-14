import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {User} from './user'

@Entity()

export class Contact{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.contact)
    user: User;


    @Column({
        length: 100
    })
    nom: string;

    @Column({
        length: 100
    })
    prenom: string;

    @Column()
    numrue: number;

    @Column({
        length: 200
    })
    rue: string;

    @Column()
    cp: number;

    @Column({
        length: 100
    })
    ville: string;

    @Column()
    tel: number;
}
