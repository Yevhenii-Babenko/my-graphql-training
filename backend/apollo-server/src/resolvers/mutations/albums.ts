// Implement mutations and resolvers for
// CRUD Albums
// createAlbum(createAlbumInput: CreateAlbumInput!): Album
// updateAlbum(id: ID!, updateAlbumInput: UpdateAlbumInput!): Album
// deleteAlbum(id: ID!): Boolean


const createAlbum = (album, {createAlbumInput}, {dataSources}, info) => {
    // createAlbumInput.postAPI.createAlbum(createAlbumInput) => created method in dataSource class
    return {id: '101', ...createAlbumInput}
}

const updateAlbum =  (album, {id, updateAlbumInput}, {dataSources}, info) => {
    return dataSources.postsAPI.updateAlbum(id, updateAlbumInput);
}

const deleteAlbum = (album, {id}, {dataSources}, info)=> {
    return dataSources.postsAPI.deleteAlbum(id);
}

export {createAlbum, updateAlbum, deleteAlbum};