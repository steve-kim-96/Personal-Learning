import { Field, ObjectType, Int } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Post } from "./Post";
import { Updoot } from "./Updoot";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn() //@PrimaryGeneratedColumn() for TypeORM
  id!: number;

  @Field(() => String)
  @Column({ unique: true }) //@Column() for TypeORM
  email!: string;

  @Field(() => String)
  @Column({ unique: true }) //@Column() for TypeORM
  username!: string;

  @Column() //@Column() for TypeORM // EXCLUDE the @Field property because you don't want to expose password in a query
  password!: string;

  @OneToMany(() => Post, (post) => post.creator)
  posts: Post[];

  @OneToMany(() => Updoot, (updoot) => updoot.user)
  updoots: Updoot[];

  @Field(() => String)
  @CreateDateColumn() //@CreateDateColumn() for TypeORM
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn() //@Column() for TypeORM
  updatedAt: Date;
}
