// src/token.type.ts
import { ObjectType, Field, ID, registerEnumType } from "@nestjs/graphql";
import { LessonType } from "src/lesson/lesson.type";
export enum OpenTokenCodeType {
  ADD_TIME = "ADD_TIME",
  SET_TIME = "SET_TIME",
  DISABLE_PAYG = "DISABLE_PAYG",
  COUNTER_SYNC = "COUNTER_SYNC",
  INVALID = "INVALID",
  ALREADY_USED = "ALREADY_USED"
}

// Register the enum type with GraphQL
registerEnumType(OpenTokenCodeType, {
  name: 'OpenTokenCodeType',
});

@ObjectType()
export class TokenDataType {
  @Field(type => ID)
  id: number;

  @Field()
  secret_key: string;

  @Field()
  generated_token: string;

  @Field(type => OpenTokenCodeType)
  token_type: OpenTokenCodeType;

  @Field()
  token_value: number;

  @Field()
  token_count: number;

  @Field(type => LessonType)
  lesson: LessonType;
}
