import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity } from 'typeorm';

@Entity()
export abstract class Authentication {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({type: 'timestamptz'})
    accountCreatedDate: Date;

    @Column({type: 'boolean'})
    rememberMe: boolean;

    @Column({type: 'text'})
    authenticationString: string;

    @Column({type: 'uuid'})
    accountId: string;
}