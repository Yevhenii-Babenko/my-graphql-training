import { RESTDataSource } from '@apollo/datasource-rest';

export class Albums extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://jsonplaceholder.typicode.com/';
    }

    async getAlbums() {
        return await this.get('albums')
    }

    async getAlbumById(id: number) {
        return await this.get(`albums${id}`)
    }

}