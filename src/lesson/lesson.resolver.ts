import { Resolver, Query, Mutation } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { Args } from "@nestjs/graphql";
import { OpenTokenCodeType } from "src/codegen/codegen.type";
@Resolver( of => LessonType)
export class LessonResolver {

    constructor(
        private lessonService: LessonService
    ) {}

    @Query( returns => LessonType)
    lesson (
        @Args('id') id: string,
    ) {
        
        return this.lessonService.getLesson(id)
    }

    @Mutation(returns => LessonType)
    createLesson( 
        @Args('name') name: string,
        @Args('startDate') startDate: string,
        @Args('endDate') endDate: string,
    ) {
        return this.lessonService.createLesson(name, startDate, endDate)
    }

    @Mutation(() => LessonType)
    async updateOrCreateCodeGenerator(
      @Args('lessonId') lessonId: string,
      @Args('secret_key') secret_key: string,
      @Args('generated_token') generated_token: string,
      @Args('token_type') token_type: OpenTokenCodeType,
      @Args('token_value') token_value: number,
      @Args('token_count') token_count: number,
    ): Promise<LessonType> {
      return this.lessonService.findOrCreateCodeGenerator(
        lessonId,
        secret_key,
        generated_token,
        token_type,
        token_value,
        token_count,
      );
    }
}