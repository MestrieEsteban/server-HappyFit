import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'
import Programme from './Programme'
import Exercise_name from './exercise_name'
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

  @ManyToOne((type) => Exercise_name, (exercise_name) => exercise_name.exercise)
  @JoinColumn({ name: 'id_exercise_name' })
  exercise_name_id!: Exercise_name | undefined

  @ManyToOne((type) => Muscle, (muscle) => muscle.exercise)
  @JoinColumn({ name: 'id_muscle' })
  muscle_id!: Exercise_name | undefined

  /**
   * Methods
   */
  public toJSON(): Exercise {
    const json = Object.assign({}, this)

    delete json.exercise_id

    return json
  }
}
