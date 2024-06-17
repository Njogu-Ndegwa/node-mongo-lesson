import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TokensService } from './codegen.service';
import { TokenDataType, OpenTokenCodeType  } from './codegen.type';

@Resolver(of => TokenDataType)
export class TokensResolver {
  constructor(private readonly tokensService: TokensService) {}

//   @Query(returns => [TokenDataType])
//   async tokens() {
//     return this.tokensService.findAll();
//   }

//   @Query(returns => TokenDataType)
//   async token(@Args('id', { type: () => String }) id: string) {
//     return this.tokensService.findOne(parseInt(id, 10));
//   }

  @Query(returns => TokenDataType)
  async tokenByLessonId(@Args('lessonId', { type: () => String }) lessonId: string) {
    return this.tokensService.findByLessonId(lessonId);
  }

  @Mutation(returns => TokenDataType)
  async upsertTokenData(
    @Args('lessonId', { type: () => String }) lessonId: string,
    @Args('secret_key') secret_key: string,
    @Args('generated_token') generated_token: string,
    @Args('token_type', { type: () => OpenTokenCodeType }) token_type: OpenTokenCodeType,
    @Args('token_value', { type: () => Int }) token_value: number,
    @Args('token_count', { type: () => Int }) token_count: number,
  ) {
    return this.tokensService.upsertTokenData(
      lessonId,
      secret_key,
      generated_token,
      token_type,
      token_value,
      token_count,
    );
  }
}
