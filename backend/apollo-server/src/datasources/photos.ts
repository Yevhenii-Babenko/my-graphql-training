import { RESTDataSource } from '@apollo/datasource-rest';

export class Photos extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://jsonplaceholder.typicode.com/';
    }

    async getAlPhotos() {
        return await this.get('albums')
    }

    async getPhotoById(id: number) {
        return await this.get(`albums${id}`)
    }

}