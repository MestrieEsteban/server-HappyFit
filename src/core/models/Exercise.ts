import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import Programme from './Programme'
import ExerciseName from './ExerciseName'
import Muscle from './Muscle'

@Entity()
export default class Exercise extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false })
  repet!: number

  @Column({ nullable: false })
  series!: number

  @Column({ nullable: false })
  pause!: number

  @ManyToOne((type) => Programme, (programme) => programme.exercise)
  exercise_id!: Programme[] | undefined

  @ManyToOne((type) => ExerciseName, (ExerciseName) => ExerciseName.exercise)
  @JoinColumn({ name: 'idExerciseName' })
  idExerciseName!: ExerciseName | undefined

  @ManyToOne((type) => Muscle, (muscle) => muscle.exercise)
  @JoinColumn({ name: 'idMuscle' })
  idMuscle!: ExerciseName | undefined

  /**
   * Methods
   */
  public toJSON(): Exercise {
    const json: Exercise = Object.assign({}, this)

    return json
  }
}
