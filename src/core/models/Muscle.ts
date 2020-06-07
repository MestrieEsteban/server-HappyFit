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
import Exercise from './Exercise'

@Entity()
export default class Muscle extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false, unique: true })
  name!: string

  @OneToMany((type) => Exercise, (exercise) => exercise.muscle_id)
  exercise!: Exercise[] | undefined

  /**
   * Methods
   */
  public toJSON(): Muscle {
    const json = Object.assign({}, this)

    delete json.exercise
    return json
  }
}
