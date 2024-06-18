// src/codegen/codegen.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { OpenTokenCodeType } from './codegen.type';

@Entity()
export class CodeGen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  secret_key: string;

  @Column()
  generated_token: string;

  @Column({
    type: 'enum',
    enum: OpenTokenCodeType,
  })
  token_type: OpenTokenCodeType;

  @Column()
  token_value: number;

  @Column()
  token_count: number;

}
