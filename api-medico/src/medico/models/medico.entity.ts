import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Medico extends BaseEntity {

  @PrimaryColumn()
  crm: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  nome: string;

  @Column({ nullable: false, type: 'varchar', length: 8 })
  password: string;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  status: string;

}
