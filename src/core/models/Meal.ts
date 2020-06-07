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
    OneToMany
  } from 'typeorm'
  import User from './User'
  
  @Entity()
  export default class Meal extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
  
    @Column({ nullable: false, unique: true })
    number!: string

    @OneToMany( type => User, user => user.meal_id)
    user!: User[] | undefined
  
    /**
     * Methods
     */
    public toJSON(): Meal {
      const json = Object.assign({}, this)
  
      delete json.user
      return json
    }
  }
  