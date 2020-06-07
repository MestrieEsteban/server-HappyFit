import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import Exercise from './Exercise'

@Entity()
export default class ExerciseName extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false, unique: true })
  name!: string

  @OneToMany((type) => Exercise, (exercise) => exercise.ExerciseName_id)
  exercise!: Exercise[] | undefined

  /**
   * Methods
   */
  public toJSON(): ExerciseName {
    const json = Object.assign({}, this)

    delete json.exercise
    return json
  }
}
