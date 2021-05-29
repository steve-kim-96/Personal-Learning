import { Field, ObjectType, Int } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Updoot } from "./Updoot";
import { User } from "./User";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn() //@PrimaryGeneratedColumn() for TypeORM
  id!: number;

  @Field(() => String)
  @Column() //@Column() for TypeORM
  title!: string;

  @Field(() => String)
  @Column() //@Column() for TypeORM
  text!: string;

  @Field(() => String)
  @Column({ type: "int", default: 0 }) //@Column() for TypeORM
  points!: number;

  @Field(() => Int, { nullable: true })
  voteStatus: number | null;

  @Field()
  @Column()
  creatorId: number;

  @Field()
  @ManyToOne(() => User, (user) => user.posts)
  creator: User;

  @OneToMany(() => Updoot, (updoot) => updoot.post)
  updoots: Updoot[];

  @Field(() => String)
  @CreateDateColumn() //@Column() for TypeORM
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn() //@Column() for TypeORM
  updatedAt: Date;
}
