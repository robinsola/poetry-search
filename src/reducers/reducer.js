let initialState = {
  inputAuthor: '',
  inputKeyword: '',
  searchResults: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_AUTHOR':
      return {
        ...state,
        inputAuthor: action.inputAuthor
      }
    break;
    case 'SEARCH_KEYWORD':
      return {
        ...state,
        inputKeyword: action.inputKeyword
      }
    break;
    case 'FETCH_POEMS':
      return {
        ...state,
        searchResults: action.searchResults
      }
    default:
      return state;
  }
}

export default reducer;
