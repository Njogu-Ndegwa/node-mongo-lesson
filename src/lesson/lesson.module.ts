import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { CodegenModule } from 'src/codegen/codegen.module';
@Module({
    imports: [
        TypeOrmModule.forFeature([Lesson]),
        CodegenModule
        
    ],
    providers: [LessonResolver, LessonService],
    exports: [LessonService, TypeOrmModule], // Export service if it's used in other modules
})
export class LessonModule {}
