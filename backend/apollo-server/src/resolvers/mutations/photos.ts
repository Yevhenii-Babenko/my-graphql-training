// Implement mutations and resolvers for
// CRUD Photos
// createPhoto(albumId: ID!, createPhotoInput: CreatePhotoInput!): Photo
// updatePhoto(id: ID!, updatePhotoInput: UpdatePhotoInput!): Photo
// deletePhoto(id: ID!): Boolean

const createPhoto = (photo, {createPhotoInput}, {dataSources}, info) => {
    // return dataSources.photosAPI.createPhoto(createPhotoInput); => jsonPlaceholder returns null in this particular case
    return {id: '101', ...createPhotoInput}
};

const updatePhoto = (photo, {id, createPhotoInput}, {dataSources}, info) => {
    return dataSources.photosAPI.updatePhoto(id, createPhotoInput);
};

const deletePhoto = (photo, {id}, {dataSources}, info) => {
    return dataSources.photosAPI.deletePhoto(id);
};

export {createPhoto, updatePhoto, deletePhoto}