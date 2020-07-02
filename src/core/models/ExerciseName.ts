import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'
import Exercise from './Exercise'

@Entity()
export default class ExerciseName extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false, unique: true })
  name!: string

  @OneToMany((type) => Exercise, (exercise) => exercise.idExerciseName)
  exercise!: Exercise[] | undefined

  /**
   * Methods
   */
  public toJSON(): ExerciseName {
    const json: ExerciseName = Object.assign({}, this)

    return json
  }
}
