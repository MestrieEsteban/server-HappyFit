import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm'
import User from './User'
import Exercise from './Exercise'

@Entity()
export default class Programme extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false, unique: true })
  name!: string

  @ManyToOne((type) => User, (user) => user.programmes)
  @JoinColumn({ name: 'id_user' })
  user_id!: User | undefined

  @ManyToOne((type) => Exercise, (exercise) => exercise.exercise_id)
  @JoinColumn({ name: 'id_exercise' })
  exercise!: Exercise | undefined

  /**
   * Methods
   */
  public toJSON(): Programme {
    const json = Object.assign({}, this)

    delete json.user_id

    return json
  }
}
