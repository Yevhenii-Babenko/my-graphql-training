import { RESTDataSource } from '@apollo/datasource-rest';

export class PhotosAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://jsonplaceholder.typicode.com/';
    }

    async getAlPhotos() {
        return await this.get('photos')
    }

    async getPhotoById(id: number) {
        return await this.get(`photos/${id}`)
    }

    async getPhotosInAlbum(albumId: number) {
        return await this.get(`albums/${albumId}/photos`)
    }
}