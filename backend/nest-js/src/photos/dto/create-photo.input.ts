import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreatePhotoInput {
    @Field({ nullable: true })
    title: string;

    @Field(() => ID)
    albumId: number

    @Field()
    url: string

    @Field()
    thumbnailUrl: string
}