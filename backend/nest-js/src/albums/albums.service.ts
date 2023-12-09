import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {PubSub} from 'graphql-subscriptions';

import {CreateAlbumInput, UpdateAlbumInput} from "./dto";
import {Album} from './entries';

const pubSub = new PubSub();

@Injectable()
export class AlbumsService {
    constructor(@InjectRepository(Album) private albumRepository: Repository<Album>,) {
    }

    async findAll(): Promise<Album[]> {
        return this.albumRepository.find({order: {id: 'DESC'}})
    }

    async findOne(id): Promise<Album> {
        return this.albumRepository.findOneOrFail({where: {id}})
    }

    async create(createAlbumInput: CreateAlbumInput): Promise<Album> {
        await new Promise((resolve) => {
            setTimeout(() => resolve(null), 2000)
        })
        return this.albumRepository.save(createAlbumInput)
    }

    async update(id, updateAlbumInput: UpdateAlbumInput): Promise<Album> {
        const album = await this.albumRepository.findOne({where: {id}})
        return this.albumRepository.save({...album, ...updateAlbumInput})
    }

    async remove(id): Promise<Album> {
        const album = await this.albumRepository.findOne({where: {id}})
        await pubSub.publish('albumDeleted', {albumDeleted: album})

        return this.albumRepository.remove(album)
    }
}