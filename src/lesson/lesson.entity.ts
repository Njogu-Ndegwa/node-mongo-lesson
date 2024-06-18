// src/lesson/lesson.entity.ts
import { Column, Entity, ObjectIdColumn, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { CodeGen as CodeGenerator } from '../codegen/codegen.entity'; // Ensure the correct path

@Entity()
export class Lesson {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @OneToOne(() => CodeGenerator, { cascade: true })
  @JoinColumn()
  codeGenerator: CodeGenerator;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
