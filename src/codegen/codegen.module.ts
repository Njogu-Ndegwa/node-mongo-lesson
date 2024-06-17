import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokensResolver } from './codegen.resolver';
import { TokensService } from './codegen.service';
import { CodeGen } from './codegen.entity';
import { LessonModule } from 'src/lesson/lesson.module';
@Module({
    imports: [
        TypeOrmModule.forFeature([CodeGen]),
        LessonModule
    ],
    providers: [TokensResolver, TokensService]
})
export class CodegenModule {}
