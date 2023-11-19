export default `#graphql
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }

  type Post {
    id: ID!
    title: String
    body: String
    comments: [Comment]
    author: Author
  }

  type PostConnection {
    data: [Post]
    info: ConnectionInfo
  }

  type ConnectionInfo {
    page: Int!
    total: Int
    pages: Int
  }

  type Comment {
    id: ID!
    postId: ID!
    name: String
    email: String
    body: String
  }

  type Author {
    id: ID!
    name: String
    username: String
    email: String
    address: Address
  }

  type Address {
    street: String
    suite: String
    city: City
    zipcode: String
  }
  
  type Photo {
    albumId: ID!
    id: ID!
    title: String
    url: String
    thumbnailUrl: String
  }
  
  type Album {
    userId: ID!
    id: ID!
    title: String
  }

  enum City {
    LVIV
    KYIV
    DNIPRO
  }

  type Query {
    posts: [Post]
    post(id: Int!): Post
    postsPaginated(page: Int = 1, pageSize: Int = 5): PostConnection!
    comments: [Comment]
    authors: [Author]
    authorsByCity(city: City!): [Author]
    photos: [Photo]
    photo(id: Int!): Photo
    albums: [Album]
    album(id: Int!): Album
    photosInAlbum(albumId: Int!): [Photo]
  }

  type Mutation {
    createPost(createPostInput: CreatePostInput!): Post
    updatePost(id: Int!, updatePostInput: UpdatePostInput!): Post
    deletePost(id: Int!): Boolean
    createComment(postId: ID!, createCommentInput: CreateCommentInput!): Comment
    updateComment(id: ID!, updateCommentInput: UpdateCommentInput!): Comment
    deleteComment(id: ID!): Boolean
    createAlbum(createAlbumInput: CreateAlbumInput!): Album
    updateAlbum(id: Int!, updateAlbumInput: UpdateAlbumInput!): Album
    deleteAlbum(id: ID!): Boolean
  }

  type Subscription {
    postDeleted: Post!
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    body: String
  }

  input CreateCommentInput {
    name: String!
    email: String!
    body: String!
  }

  input UpdateCommentInput {
    name: String
    email: String
    body: String
  }
  
  input CreateAlbumInput {
    userId: Int!
    title: String!
  }
  
  input UpdateAlbumInput {
    userId: Int
    title: String
  }
`;
