const INITIAL_STATE = {
  current: 0,
  total: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modify_current':
      return {
        ...state,
        current:
        parseInt(action.payload, 10) < state.total
        ? parseInt(action.payload, 10)
        : state.total
      };
    case 'increase_current':
      return {
        ...state,
        current:
        state.current < state.total
        ? state.current + action.payload
        : state.total
      };
    case 'decrease_current':
      return {
        ...state,
        current:
        state.current > 0
        ? state.current - action.payload
        : 0
      };
    case 'modify_total':
      return {
        ...state,
        total:
        parseInt(action.payload, 10) > state.current
        ? parseInt(action.payload, 10)
        : state.current
      };
    case 'increase_total':
      return {
        ...state,
        total: state.total + action.payload
      };
    case 'decrease_total':
      return {
        ...state,
        total: state.total > state.current
        ? state.total - action.payload
        : state.current
      };
    default:
      return state;
  }
};
