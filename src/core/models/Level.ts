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
  export default class Level extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
  
    @Column({ nullable: false, unique: true })
    name!: string

    @OneToMany( type => User, user => user.level_id)
    user!: User[] | undefined
  
    /**
     * Methods
     */
    public toJSON(): Level {
      const json = Object.assign({}, this)
  
      delete json.user
      return json
    }
  }
  