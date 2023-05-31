export const setTypedKeys = (typedKeys) => ({
    type: 'SET_TYPED_KEYS',
    payload: typedKeys,
  });
  
  export const setStartTime = (startTime) => ({
    type: 'SET_START_TIME',
    payload: startTime,
  });
  
  export const setEndTime = (endTime) => ({
    type: 'SET_END_TIME',
    payload: endTime,
  });
  
  export const calculateAccuracy = (typedKeys, nextKeys) => ({
    type: 'CALCULATE_ACCURACY',
    payload: { typedKeys, nextKeys },
  });
  