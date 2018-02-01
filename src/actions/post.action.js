import {
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_ERROR
} from './post.types';
import axios from 'axios';
import {Promise} from 'es6-promise';

export const getPosts = () => {
    return {
        types: [LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR],
        endpoints: 'search',
        callAPI: () => {
            return new Promise((resolve, reject) => {
                axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=> {
                    resolve(response.data)
                }).catch((err) => {
                    reject(err);
                })
            });
        }
    }
}