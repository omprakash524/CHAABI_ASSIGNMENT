const initialState = {
    typedKeys: '',
    nextKeys: 'asdfjkl;',
    startTime: null,
    endTime: null,
    accuracy: null,
  };

  const typingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TYPED_KEYS':
        return { ...state, typedKeys: action.payload };
      case 'SET_START_TIME':
        return { ...state, startTime: action.payload };
      case 'SET_END_TIME':
        return { ...state, endTime: action.payload };
      case 'SET_ACCURACY':
        return { ...state, accuracy: action.payload };
      default:
        return state;
    }
  };
  
  export default typingReducer;
  