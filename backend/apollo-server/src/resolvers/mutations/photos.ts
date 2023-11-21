// Implement mutations and resolvers for
// CRUD Photos
// createPhoto(albumId: ID!, createPhotoInput: CreatePhotoInput!): Photo
// updatePhoto(id: ID!, updatePhotoInput: UpdatePhotoInput!): Photo
// deletePhoto(id: ID!): Boolean

const createPhoto = (photo, {createPhotoInput}, {dataSources}, info) => {
    // return dataSources.photosAPI.createPhoto(createPhotoInput); => jsonPlaceholder returns null in this particular case
    return {id: '101', ...createPhotoInput}
};

const updatePhoto = (photo, {id, updatePhotoInput}, {dataSources}, info) => {
    // return dataSources.photosAPI.updatePhoto(id, updatePhotoInput); => mocked as jsonPlaceholder returns null
    return {id, ...updatePhotoInput}
};

const deletePhoto = (photo, {id}, {dataSources}, info) => {
    dataSources.photosAPI.deletePhoto(id);
    // let's return an id as it returns null
    return {id};
}

export {createPhoto, updatePhoto, deletePhoto}