import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import Programme from './Programme'
import ExerciseName from './ExerciseName'
import Muscle from './muscle'

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

  @OneToMany((type) => Programme, (programme) => programme.exercise)
  exercise_id!: Programme[] | undefined

  @ManyToOne((type) => ExerciseName, (ExerciseName) => ExerciseName.exercise)
  @JoinColumn({ name: 'id_ExerciseName' })
  ExerciseName_id!: ExerciseName | undefined

  @ManyToOne((type) => Muscle, (muscle) => muscle.exercise)
  @JoinColumn({ name: 'id_muscle' })
  muscle_id!: ExerciseName | undefined

  /**
   * Methods
   */
  public toJSON(): Exercise {
    const json = Object.assign({}, this)

    delete json.exercise_id

    return json
  }
}
