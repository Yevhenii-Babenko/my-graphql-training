import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Photo} from "./entries";
import {PhotosResolver} from "./photos.resolver";
import {PhotosService} from "./photos.service";

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [PhotosResolver, PhotosService]
})
export class PhotosModule {}