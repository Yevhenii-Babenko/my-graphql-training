// photos: [Photo]
// photo(id: ID!): Photo
// photosInAlbum(albumId: ID!): [Photo]

const photo = (photo, args, {dataSources}, info) => {
    return dataSources.photosAPI.getPhotoById(args.id);
}
const photos = (photos, args, {dataSources}, info) => {
    return dataSources.photosAPI.getAlPhotos()
}

const photosInAlbum = (photos, args, {dataSources}, info) => {
    return dataSources.photosAPI.getPhotosInAlbum(args.albumId)
}

export {photo, photos, photosInAlbum}