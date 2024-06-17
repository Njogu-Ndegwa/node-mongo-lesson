import { ObjectType, Field, ID } from "@nestjs/graphql";
import { TokenDataType } from "src/codegen/codegen.type";
@ObjectType()
export class LessonType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;

    @Field(type => TokenDataType, { nullable: true })
    tokenData?: TokenDataType;

}