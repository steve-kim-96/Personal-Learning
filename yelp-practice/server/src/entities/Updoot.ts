import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

// updoots is many to many relationship
// posts can have many updoots
// one person can updoot many posts

@ObjectType()
@Entity()
export class Updoot extends BaseEntity {
  @Field()
  @Column({ type: "int" })
  value: number;

  @PrimaryColumn() //@PrimaryGeneratedColumn() for TypeORM
  userId: number;

  @ManyToOne(() => User, (user) => user.updoots) //@Column() for TypeORM
  user: User;

  @Field()
  @PrimaryColumn()
  postId: number;

  @ManyToOne(() => Post, (post) => post.updoots, {
    onDelete: "CASCADE",
  })
  post: Post;
}
