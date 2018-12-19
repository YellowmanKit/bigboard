const mainReducer = (
  state = {
    status: 'init',
    language: 'chinese',
    version: 'v1.0.0'
  }, action)=>{
  switch (action.type) {
    case 'setStatus':
      return {...state, status: action.payload};
    default:
      return state;
  }
}

export default mainReducer;
