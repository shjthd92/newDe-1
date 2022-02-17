import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany} from "typeorm";
import {User} from './user';
import { Comment } from "./comment";

@Entity()
export class Content {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    main: string;    

    @Column({default:0})
    like: number;

    @Column({default:null})
    report: number;

    @Column()
    parentCategory: string;

    @Column()
    childCategory: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date; 
    
    @ManyToOne(() => User, user => user.contents)
    user: User;

    @Column()
    userId: Number   

    @OneToMany(() => Comment, comment => comment.content)
    comments:Comment[];

}