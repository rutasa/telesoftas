export const ADD_SUGGESTION = 'ADD_SUGGESTION'
export const LIKE_ITEM = 'LIKE_ITEM'


const initialState = {
  suggestions: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUGGESTION:
      return {
        ...state,
        suggestions: action.payload
      }

    case LIKE_ITEM:
      return {
        ...state,
        suggestions: action.payload
      }

    default:
      return state
  }
}

export const addSuggestion = (e, suggestions) => {
  const list = [...suggestions, {'suggestion': e.target.querySelector('input').value,
    'likes': 0, 'liked': false}]
  return dispatch => {
    dispatch({
      type: ADD_SUGGESTION,
      payload: list
    })
  }
}

export const likeItem = (i, suggestions) => {
  const new_suggestions = suggestions.map((sugg, ind) => (ind === i ? Object.assign(sugg,
      {'likes':sugg.liked? sugg.likes-1 : sugg['likes']+1, liked:!sugg.liked}) : sugg))
  return dispatch => {
    dispatch({
      type: LIKE_ITEM,
      payload: new_suggestions
    })
  }
}
