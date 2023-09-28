import { PkgStateEnum } from "src/pkgstate/pkgstate.eneity";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pkg {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({
    length: 20,
  })
  pkgId: string;

  @PrimaryColumn({
    length: 20,
  })
  userId: string

  // TODO: 暂定只用于取件码和包裹备注
  // 1. 在新建包裹时自动生成（好实现）-到站需要人工按学院分-学院包裹数量差异大
  // 2. 检录时生成（菜鸟驿站、分布式、不了解检录时会慢多少）
        // -到站时按顺序摆放行李、按检录人员不同分组
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