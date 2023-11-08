const album = (album, args, {dataSources}, info) => {
    return dataSources.albumsAPI.getAlbumById(args.id);
}

const albums = (albums, args, {dataSources}, info) => {
    return dataSources.albumsAPI.getAlbums();
}

export {album, albums}