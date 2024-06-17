// src/lesson/lesson.entity.ts
import { Column, Entity, ObjectIdColumn, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { CodeGen as TokenData } from '../codegen/codegen.entity'; // Ensure the correct path

@Entity()
export class Lesson {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @OneToOne(() => TokenData, tokenData => tokenData.lesson, { cascade: true }) // Ensure cascade is set if needed
  @JoinColumn()
  tokenData: TokenData;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
