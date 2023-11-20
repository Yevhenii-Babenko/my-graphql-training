// Implement mutations and resolvers for
// CRUD Albums
// createAlbum(createAlbumInput: CreateAlbumInput!): Album
// updateAlbum(id: ID!, updateAlbumInput: UpdateAlbumInput!): Album
// deleteAlbum(id: ID!): Boolean


const createAlbum = (album, {createAlbumInput}, {dataSources}, info) => {
    // createAlbumInput.postAPI.createAlbum(createAlbumInput) => created method in dataSource class => jsonPlaceholder returns null in this particular case
    return {id: '101', ...createAlbumInput}
}

const updateAlbum =  (album, {id, updateAlbumInput}, {dataSources}, info) => {
    return dataSources.albumsAPI.updateAlbum(id, updateAlbumInput);
}

const deleteAlbum = (album, {id}, {dataSources}, info)=> {
    return dataSources.albumsAPI.deleteAlbum(id);
}

export {createAlbum, updateAlbum, deleteAlbum};