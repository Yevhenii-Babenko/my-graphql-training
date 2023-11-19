import {RESTDataSource} from '@apollo/datasource-rest';
import {createAlbum} from "../resolvers/mutations";

// albums: [Album]
// album(id: ID!): Album!
export class AlbumsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://jsonplaceholder.typicode.com/';
    }

    async getAlbums() {
        return await this.get('albums')
    }

    async getAlbumById(id: number) {
        return await this.get(`albums/${id}`)
    }

    async createAlbum(createAlbumInput: {
        userId: number; title: string; body: string
    }) {
        return await this.post('albums', createAlbumInput)
    }

    async updateAlbum(id: number, updateAlbumInput: {
        body: {userId: number; title: string;}
    }) {
        return await this.put(`albums/${id}`, updateAlbumInput);
    }

    async deleteAlbum(id: number) {
        return await this.delete(`albums/${id}`);
    }
}