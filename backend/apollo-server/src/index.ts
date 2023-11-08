import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typeDefs from './schema';
import resolvers from './resolvers';
import { AuthorsAPI, CommentsAPI, PostsAPI, PhotosAPI, AlbumsAPI } from './datasources';
// import { logger } from './middlewares';

interface SchemaContext {
  dataSources: {
    postsAPI: PostsAPI;
    commentsAPI: CommentsAPI;
    authorsAPI: AuthorsAPI;
    photosAPI: PhotosAPI;
    albumsAPI: AlbumsAPI;
  };
}

const server = new ApolloServer<SchemaContext>({
  typeDefs,
  resolvers, // functions => should return data according to our schema
  // plugins: [logger],
});

const standaloneServer = startStandaloneServer(server, {
  listen: {
    port: 3001,
    path: '/graphql',
  },
  context: async () => ({
    dataSources: {
      postsAPI: new PostsAPI(),
      commentsAPI: new CommentsAPI(),
      authorsAPI: new AuthorsAPI(),
      photosAPI: new PhotosAPI(),
      albumsAPI: new AlbumsAPI(),
    },
  }),
});

standaloneServer.then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
