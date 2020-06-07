import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm'
import Exercise from './Exercise'

@Entity()
export default class Exercise_name extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false, unique: true })
  name!: string

  @OneToMany((type) => Exercise, (exercise) => exercise.exercise_name_id)
  exercise!: Exercise[] | undefined

  /**
   * Methods
   */
  public toJSON(): Exercise_name {
    const json = Object.assign({}, this)

    delete json.exercise
    return json
  }
}
