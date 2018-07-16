const INITIAL_STATE = {
  className: ' ',
  classLevel: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modify_class_name':
      return {
        ...state,
        className: action.payload
      };
    case 'modify_class_level':
      return {
        ...state,
        classLevel:
        parseInt(action.payload, 10) > 1
        ? parseInt(action.payload, 10)
        : 1
      };
    case 'increase_class_level':
      return {
        ...state,
        classLevel: state.classLevel + action.payload
      };
    case 'decrease_class_level':
      return {
        ...state,
        classLevel: state.classLevel > 1 ? state.classLevel - action.payload : 1
      };
    default:
      return state;
  }
};
