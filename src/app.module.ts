import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { CodegenModule } from './codegen/codegen.module';
import { CodeGen } from './codegen/codegen.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: "mongodb+srv://dennisndegwa001:Dennis0@cluster0.o6rbnjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      synchronize: false,
      entities: [
        Lesson,
        CodeGen
      ]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
    LessonModule,
    CodegenModule,
  ],

})

export class AppModule {}