import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export enum PkgStateEnum {
  init = '未开始', 
  start = '已装车', 
  goon =  '运输中', 
  finish = '已签收', 
  cancel = '已取消',
}
@Entity()
export class PkgState {
  @PrimaryGeneratedColumn()
  id: number

  @PrimaryColumn()
  pkgId: number

  @PrimaryColumn({
    length: 20,
  })
  userId: string

  @Column({
    type: 'datetime',
  })
  time: Date

  @Column({
    type: 'enum', 
    enum: PkgStateEnum,
    default: PkgStateEnum.init,
  })
  state: PkgStateEnum

  // 具体详情 .eg('在厦门北装车')
  @Column({
    length: 50,
  })
  reason: string
}