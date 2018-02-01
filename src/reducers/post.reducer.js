import {
  LOAD_POSTS_SUCCESS
} from '../actions/post.types';

const post = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS:
      return action.body;
    default:
      return state;
  }
}

export default post;