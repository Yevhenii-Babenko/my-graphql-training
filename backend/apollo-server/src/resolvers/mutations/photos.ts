// Implement mutations and resolvers for
// CRUD Photos
// createPhoto(albumId: ID!, createPhotoInput: CreatePhotoInput!): Photo
// updatePhoto(id: ID!, updatePhotoInput: UpdatePhotoInput!): Photo
// deletePhoto(id: ID!): Boolean

const createPhoto = (photo, {createPhotoInput}, {dataSources}, info) => {
    return dataSources.createPhoto(createPhotoInput);
};

const updatePhoto = (photo, {id, createPhotoInput}, {dataSources}, info) => {
    return dataSources.updatePhoto(id, createPhotoInput);
};

const deletePhoto = (photo, {id}, {dataSources}, info) => {
    return dataSources.deletePhoto(id);
};

export {createPhoto, updatePhoto, deletePhoto}