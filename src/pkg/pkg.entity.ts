import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pkg {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({
    length: 20,
  })
  userId: string

  @PrimaryColumn()
  pkgId: number

  @Column({
    length: 50,
  })
  content: string

  // 行李是否存在
  @Column({
    length: 20,
  })
  state: string
}