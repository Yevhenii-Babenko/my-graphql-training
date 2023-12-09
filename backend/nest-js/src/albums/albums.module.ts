import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {Album} from './entries';
import {AlbumsResolver} from "./albums.resolver";
import {AlbumsService} from "./albums.service";

@Module({
    imports: [TypeOrmModule.forFeature([Album])],
    providers: [AlbumsResolver, AlbumsService],
})
export class AlbumsModule {}