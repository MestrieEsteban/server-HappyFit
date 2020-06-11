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
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import bcrypt from 'bcryptjs'

import Post from './Post'
import Programme from './Programme'
import Meal from './Meal'
import Goal from './Goal'
import Level from './Level'

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

  @Column({ nullable: true })
  gender!: string

  @Column({ nullable: true })
  height!: number

  @Column({ type: 'float', nullable: true })
  weight!: number

  @CreateDateColumn()
  createdAt!: string

  @UpdateDateColumn()
  updatedAt!: string

  @OneToMany(() => Post, (post: Post) => post.user)
  posts!: Post[]

  @OneToMany((type) => Programme, (programme) => programme.user_id)
  programmes!: Programme[] | undefined

  @ManyToOne((type) => Meal, (meal) => meal.user)
  @JoinColumn({ name: 'id_meal' })
  mealId!: Meal | undefined

  @ManyToOne((type) => Goal, (goal) => goal.user)
  @JoinColumn({ name: 'id_goal' })
  goalId!: Goal | undefined

  @ManyToOne((type) => Level, (level) => level.user)
  @JoinColumn({ name: 'id_level' })
  levelId!: Level | undefined

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
