import {Resolver, Query, Mutation, Args, Int, ID} from '@nestjs/graphql';

import {Photo} from "./entries";
import {PhotosService} from "./photos.service";
import {CreatePhotoInput, UpdatePhotoInput} from "./dto";

@Resolver(() => Photo)
export class PhotosResolver {
  constructor(private readonly photosService: PhotosService) {
  }

  @Query(() => [Photo], {name: 'photos'}) findAll(): Promise<Photo[]> {
    return this.photosService.findAll()
  }

  @Query(() => Photo, {name: 'photo'}) findOne(@Args('id', {type: () => Int}) id: number): Promise<Photo> {
    return this.photosService.findOne(id)
  }

  @Query(() => [Photo], {name: 'photosByAlbumId'}) findAllByAlbumId(@Args('albumId', {type: () => Int}) albumId:number): Promise<Photo[]> {
    return this.photosService.findAllByAlbumId(albumId)
  }

  @Mutation(() => Photo) createPhoto(@Args('albumId', {type: () => ID!}) albumId: number, @Args('createPhotoInput') createPhotoInput: CreatePhotoInput): Promise<Photo> {
    return this.photosService.create(albumId, createPhotoInput)
  }

  @Mutation(()=> Photo)
  updatePhoto(@Args('updatePhotoInput') updatePhotoInput: UpdatePhotoInput): Promise<Photo> {
    return this.photosService.update(updatePhotoInput.id, updatePhotoInput)
  }

  @Mutation(() => Photo)
  removePhoto(@Args('id', {type: () => Int})  id: number): Promise<Photo> {
    return  this.photosService.remove(id)
  }
}