import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm'
import bcrypt from 'bcryptjs'

import Post from './Post'

@Entity()
export default class User extends BaseEntity {
  private static SALT_ROUND = 8

  @PrimaryGeneratedColumn('uuid')
  id!: number

  @Column({ nullable: false })
  firstname!: string

  @Column({ nullable: false })
  lastname!: string

  @Column({ nullable: false, unique: true })
  email!: string

  @Column({ nullable: false })
  password!: string

  @Column({ nullable: true, default: -1 })
  age!: number

  @CreateDateColumn()
  createdAt!: string

  @UpdateDateColumn()
  updatedAt!: string

  @OneToMany(() => Post, (post: Post) => post.user)
  posts!: Post[]

  /**
   * Hooks
   */
  @BeforeInsert()
  @BeforeUpdate()
  public hashPassword(): void | never {
    if (!this.password) {
      throw new Error('Password is not defined')
    }

    this.password = bcrypt.hashSync(this.password, User.SALT_ROUND)
  }

  /**
   * Methods
   */
  public checkPassword(uncryptedPassword: string): boolean {
    return bcrypt.compareSync(uncryptedPassword, this.password)
  }

  public toJSON(): User {
    const json: User = Object.assign({}, this)

    delete json.password

    return json
  }
}
