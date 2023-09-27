import { PkgStateEnum } from "src/pkgstate/pkgstate.eneity";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pkg {
  @PrimaryGeneratedColumn()
  pkgId: number;

  @PrimaryColumn({
    length: 20,
  })
  userId: string

  @Column({
    length: 50,
  })
  content: string

  // 行李状态：当新增 state时，进行 sub，不一样就 chg
  // 用于：<GetState /> 生成颜色，<Timeline /> 时间轴颜色
  @Column({
    type: 'enum', 
    enum: PkgStateEnum,
    default: PkgStateEnum.init,
  })
  state: PkgStateEnum
}