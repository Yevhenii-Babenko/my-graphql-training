import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAlbumInput {
    @Field()
    userId: number;

    @Field()
    title: string;
}