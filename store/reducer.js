import * as actionTypes from './actionTypes'

const initialState = {
    articles: [],
    id : 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ARTICLE :
            return {
                ...state,
                articles: [action.payload, ...state.articles],
                id: state.id + 1
            }

        case actionTypes.REMOVE_ARTICLE :
            return {
                ...state,
                articles: [...state.articles.filter(item => item.id !== action.payload.id)],
                id: state.id - 1
            }
    }

    return state
}

export default reducer