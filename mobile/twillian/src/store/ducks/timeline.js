const INITIAL_STATE = {
  data: [],
  pagination: {},
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_TWEETS':
      return { data: [...state.data, ...action.data], pagination: action.pagination };
    case 'REFRESH_TWEETS':
      return { ...state, data: action.data };
    default:
      return state;
  }
}

export default reducer;
