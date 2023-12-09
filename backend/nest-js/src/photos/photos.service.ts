import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {CreatePhotoInput, UpdatePhotoInput} from "./dto";
import {Photo} from "./entries";


@Injectable()
export class PhotosService {
  constructor(@InjectRepository(Photo) private photoRepository: Repository<Photo>) {
  }

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find({order: {id: 'DESC'}});
  }

  async findAllByAlbumId(albumId): Promise<Photo[]> {
    return this.photoRepository.find({where: {albumId}, order: {id: 'DESC'}});
  }

  async findOne(id): Promise<Photo> {
    return this.photoRepository.findOneOrFail({where: {id}});
  }

  async create(photoId, createPhotoInput: CreatePhotoInput): Promise<Photo> {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 2000);
    });
    return this.photoRepository.save({photoId, ...createPhotoInput});
  }

  async update(id, updatePhotoInput: UpdatePhotoInput): Promise<Photo> {
    const photo = await this.photoRepository.findOne({where: {id}});
    return this.photoRepository.save({...photo, ...updatePhotoInput});
  }

  async remove(id): Promise<Photo> {
    const photo = await this.photoRepository.findOne({where: {id}});
    return this.photoRepository.remove(photo);
  }

  async removeAllByAlbumId(albumId): Promise<Photo[]> {
    const photos = await this.findAllByAlbumId(albumId);
    return this.photoRepository.remove(photos);
  }
}