const uiReducer = (
  state = {
    minWidth: 480,
    maxWidth: 1260,
    minHeight: 540,
    maxHeight: 1440,
    windowWidth: 0,
    windowHeight: 0,
    basicStyle: {
      width: 0,
      height: 0,
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center'
    },
    styles: {
      container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundSize: '100% 100%'
      },
      shadows: {
        basic: { boxShadow: '2px 4px 24px -3px #888888' },
        content: { boxShadow: '0px 0px 24px -3px #888888' }
      }
    },
    colors: {
      white: '#fffaf2',
      grey: '#6e6b6a',
      cyan: '#55c3bc',
      red: '#ae1f27'
    }
  }, action)=>{
  switch (action.type) {
    case 'setDimension':
      const windowWidth = action.payload.width;
      const windowHeight = action.payload.height;
      const basicStyle =
      {...state.basicStyle,
        width:
        windowWidth < state.minWidth? state.minWidth:
        windowWidth > state.maxWidth? state.maxWidth:
        windowWidth * 0.9999,
        height:
        windowHeight < state.minHeight? state.minHeight:
        windowHeight > state.maxHeight? state.maxHeight:
        windowHeight * 0.9999};
      return {...state,
              windowWidth: windowWidth,
              windowHeight: windowHeight,
              basicStyle: basicStyle};
    default:
      return state;
  }
}

export default uiReducer;
