import * as types from './actionTypes.js';
import authorApi from '../api/mockAuthorApi';

export const loadAuthorsSuccess = (authors) => ({ type: types.LOAD_AUTHORS_SUCCESS, authors });

export const loadAuthors = () => dispatch => {
  authorApi.getAllAuthors().then(courses => {
    dispatch(loadAuthorsSuccess(courses));
  }).catch(error => error);
};
