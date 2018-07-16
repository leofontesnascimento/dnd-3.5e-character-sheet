const INITIAL_STATE = {
  name: ' ',
  level: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modify_name':
      return {
        ...state,
        name: action.payload
      };
    case 'modify_level':
      return {
        ...state,
        level:
        parseInt(action.payload, 10) > 1
        ? parseInt(action.payload, 10)
        : 1
      };
    case 'increase_level':
      return {
        ...state,
        level: state.level + action.payload
      };
    case 'decrease_level':
      return {
        ...state,
        level: state.level > 1 ? state.level - action.payload : 1
      };
    default:
      return state;
  }
};
