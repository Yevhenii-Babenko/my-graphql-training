import {Resolver, Query, Mutation, Subscription, Args, Int, ResolveField, Parent} from '@nestjs/graphql';
import {PubSub} from 'graphql-subscriptions';

const pubSub = new PubSub();

import {Album} from './entries';
import {CreateAlbumInput, UpdateAlbumInput} from "./dto";
import {AlbumsService} from "./albums.service";

@Resolver(() => Album)
export class AlbumsResolver {
    constructor(private readonly albumsService: AlbumsService) {
    }

    @Query(() => [Album], {name: 'albums'}) findAll(): Promise<Album[]> {
        return this.albumsService.findAll()
    }

    @Query(() => Album, {name: 'album'}) findOne(@Args('id', {type: () => Int}) id: number): Promise<Album> {
        return this.albumsService.findOne(id)
    }

    @Mutation(() => Album) createAlbum(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput): Promise<Album> {
        return this.albumsService.create(createAlbumInput)
    }
    @Mutation(() => Album) updateAlbum(@Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput): Promise<Album> {
        return this.albumsService.update(updateAlbumInput.id,updateAlbumInput)
    }

    @Mutation(() => Album)
    removeAlbum(@Args('id', { type: () => Int }) id: number): Promise<Album> {
        return this.albumsService.remove(id);
    }

    @Subscription(() => Album)
    albumDeleted() {
        return pubSub.asyncIterator('albumDeleted');
    }
}