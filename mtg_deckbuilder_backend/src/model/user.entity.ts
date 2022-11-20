import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity } from 'typeorm';

@Entity()
export abstract class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'text'})
    username: string;

    @Column({type: 'text'})
    password: string;

    @Column({type: 'text'})
    email: string;

    @Column({type: 'text'})
    firstName: string;

    @Column({type: 'text'})
    lastName: string;

    @CreateDateColumn({type: 'timestamptz'})
    accountCreatedDate: Date;
}