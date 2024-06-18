import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import {v4 as uuid} from "uuid"
import { CodeGen as CodeGenerator } from 'src/codegen/codegen.entity';
import { OpenTokenCodeType } from 'src/codegen/codegen.type';
@Injectable()
export class LessonService {

    constructor (
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
        @InjectRepository(CodeGenerator) private readonly codeGeneratorRepository: Repository<CodeGenerator>,
    ) {}

    async getLesson(id: string): Promise<Lesson> {

        return this.lessonRepository.findOne( {where: {id}})
    }

    async createLesson(name, startDate, endDate) {
            const lesson = this.lessonRepository.create({
                id: uuid(),
                name, 
                startDate,
                endDate
            })
            
           return this.lessonRepository.save(lesson)
    }

    async findOrCreateCodeGenerator(
        lessonId: string,
        secret_key: string,
        generated_token: string,
        token_type: OpenTokenCodeType,
        token_value: number,
        token_count: number,
      ): Promise<Lesson> {
        const lesson = await this.lessonRepository.findOne({ where: { id: lessonId }, relations: ['codeGenerator'] });
    
        if (!lesson) {
          throw new Error('Lesson not found');
        }
    
        if (!lesson.codeGenerator) {
          const newCodeGenerator = this.codeGeneratorRepository.create({
            secret_key,
            generated_token,
            token_type,
            token_value,
            token_count
          });
          lesson.codeGenerator = newCodeGenerator;
          await this.codeGeneratorRepository.save(newCodeGenerator);
        } else {
          lesson.codeGenerator.secret_key = secret_key;
          lesson.codeGenerator.generated_token = generated_token;
          lesson.codeGenerator.token_type = token_type;
          lesson.codeGenerator.token_value = token_value;
          lesson.codeGenerator.token_count = token_count;
          await this.codeGeneratorRepository.save(lesson.codeGenerator);
        }
    
        return this.lessonRepository.save(lesson);
      }
}
