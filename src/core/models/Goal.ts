import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import User from './User'

@Entity()
export default class Goal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false, unique: true })
  name!: string

  @OneToMany((type) => User, (user) => user.goalId)
  user!: User[] | undefined

  /**
   * Methods
   */
  public toJSON(): Goal {
    const json = Object.assign({}, this)

    delete json.user
    return json
  }
}
