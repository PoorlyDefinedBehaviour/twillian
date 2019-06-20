const INITIAL_STATE = {};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...action.user, token: action.token };
    case 'CHANGE_AVATAR':
      return { ...state, avatar: action.avatar };
    default:
      return state;
  }
}

export default reducer;
