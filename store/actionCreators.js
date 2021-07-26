import * as actionTypes from './actionTypes'

export const addArticle = (article) => (dispatch) => {
    dispatch({type: actionTypes.ADD_ARTICLE, payload: article})
}

export const removeArticle = (article) => (dispatch) => {
    dispatch({type: actionTypes.REMOVE_ARTICLE, payload: article})
}