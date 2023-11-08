import { RESTDataSource } from '@apollo/datasource-rest';

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

}