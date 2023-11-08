import { postDeleted } from './subscriptions';
import { createPost, updatePost, deletePost, createComment, updateComment, deleteComment } from './mutations';
import {
  posts,
  postsPaginated,
  postComments,
  post,
  postAuthor,
  authors,
  authorAddress,
  authorsByCity,
  comments,
  album,
  albums,
  photo,
  photosInAlbum
} from './queries';

export default {
  Query: {
    posts,
    post,
    postsPaginated,
    comments,
    authors,
    authorsByCity,
    album,
    albums,
    photo,
    photosInAlbum,
  },
  Mutation: {
    createPost,
    updatePost,
    deletePost,
    createComment,
    updateComment,
    deleteComment,
  },
  Subscription: {
    postDeleted: {
      subscribe: postDeleted,
    },
  },
  Post: {
    author: postAuthor,
    comments: postComments,
  },
  Author: {
    address: authorAddress,
  },
};
