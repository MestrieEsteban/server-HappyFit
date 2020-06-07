import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
  } from 'typeorm'
  import User from './User'
  import Exercise from './Exercise'
  
  @Entity()
  export default class Daily extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
  
    @Column({ nullable: false })
    serie!: number
  
    @Column({ nullable: false })
    repet!: number
  
    @Column({ nullable: false, type: 'date' })
    data!: Date

  }
  