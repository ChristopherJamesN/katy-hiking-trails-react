const initialState = {
  loading: '',
  trails: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_TRAILS':
      return {...state, loading: true}
    case 'SHOW_TRAILS':
      return {...state, loading: false, trails: action.payload};
    case 'SAVING_TRAILS':
      return { ...state, loading: false }
    case 'DELETING_TRAILS':
      return { ...state, loading: false }
    case 'ADD_TRAILS':
      return{...state, loading: false, trails: state.trails.concat(action.payload)};
    default:
      return state;
  }
};
