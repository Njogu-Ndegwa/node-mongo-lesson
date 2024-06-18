import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CodeGen as TokenData } from './codegen.entity';
import { OpenTokenCodeType } from './codegen.type';

@Injectable()
export class TokensService {
  constructor(
    @InjectRepository(TokenData)
    private tokensRepository: Repository<TokenData>,
  ) {}

//   findAll(): Promise<TokenData[]> {
//     return this.tokensRepository.find({ relations: ['lesson'] });
//   }

//   findOne(id: number): Promise<TokenData> {
//     return this.tokensRepository.findOne(id, { relations: ['lesson'] });
//   }

//   async findByLessonId(lessonId: string): Promise<TokenData> {
//     const lesson = await this.lessonsRepository.findOne({ where: { id: lessonId }, relations: ['tokenData'] });
//     if (!lesson) {
//       throw new Error('Lesson not found');
//     }
//     return lesson.tokenData;
//   }

//   async upsertTokenData(
//     lessonId: string,
//     secret_key: string,
//     generated_token: string,
//     token_type: OpenTokenCodeType,
//     token_value: number,
//     token_count: number,
//   ): Promise<TokenData> {
//     const lesson = await this.lessonsRepository.findOne({ where: { id: lessonId } });
//     console.log(lesson, "-----42----")
//     if (!lesson) {
//       throw new Error('Lesson not found');
//     }

//     let tokenData = await this.tokensRepository.findOne({ where: { lesson } });
//     console.log(tokenData,"-----48-----")
//     if (!tokenData) {
//       tokenData = new TokenData();
//       tokenData.lesson = lesson;
//     }
//     console.log(tokenData, "-----50----")
//     tokenData.secret_key = secret_key;
//     tokenData.generated_token = generated_token;
//     tokenData.token_type = token_type;
//     tokenData.token_value = token_value;
//     tokenData.token_count = token_count;

//     return this.tokensRepository.save(tokenData);
//   }
}
