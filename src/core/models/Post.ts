import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import User from './User'

@Entity()
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false, unique: true })
  slug!: string

  @Column({ nullable: false })
  title!: string

  @Column({ nullable: true })
  content!: string

  @CreateDateColumn()
  createdAt!: string

  @UpdateDateColumn()
  updatedAt!: string

  @ManyToOne(() => User, (user: User) => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user!: User

  /**
   * Methods
   */
  public toJSON(): Post {
    const json = Object.assign({}, this)

    delete json.user

    return json
  }
}
