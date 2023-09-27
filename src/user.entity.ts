import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: string;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  college: string;

  @Column()
  name: string;

  @Column()
  tel: string;

  @Column()
  address: string;
    
  @Column({ default: true })
  isActive: boolean;
}
