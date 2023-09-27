import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
  })
  userId: string;

  @Column({
    length: 20,
  })
  username: string;

  @Column({
    length: 20,
  })
  password: string;

  @Column({
    nullable: true,
    length: 20,
  })
  college: string;

  @Column({
    nullable: true,
    length: 20,
  })
  name: string;

  @Column({
    nullable: true,
    length: 20,
  })
  tel: string;

  @Column({
    nullable: true,
    length: 40,
  })
  address: string;
    
  @Column({
    default: true,
  })
  isActive: boolean;
}
