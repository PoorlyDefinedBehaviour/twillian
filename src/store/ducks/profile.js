const INITIAL_STATE = {
  profile: {},
  data: [],
  pagination: {},
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_PROFILE':
      return {
        profile: action.profile,
        data: action.data,
        pagination: action.pagination,
      };
    case 'PROFILE_LOAD_TWEETS':
      return {
        ...state,
        data: [...state.data, ...action.data],
        pagination: state.pagination,
      };
    case 'PROFILE_REFRESH_TWEETS':
      return { ...state, data: action.data };
    default:
      return state;
  }
}

export default reducer;
