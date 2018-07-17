const INITIAL_STATE = {
  currentHitPoints: 0,
  totalHitPoints: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modify_current_hit_points':
      return {
        ...state,
        currentHitPoints:
        parseInt(action.payload, 10) < state.totalHitPoints
        ? parseInt(action.payload, 10)
        : state.totalHitPoints
      };
    case 'increase_current_hit_points':
      return {
        ...state,
        currentHitPoints:
        state.currentHitPoints < state.totalHitPoints
        ? state.currentHitPoints + action.payload
        : state.totalHitPoints
      };
    case 'decrease_current_hit_points':
      return {
        ...state,
        currentHitPoints:
        state.currentHitPoints > 0
        ? state.currentHitPoints - action.payload
        : 0
      };
    case 'modify_total_hit_points':
      return {
        ...state,
        totalHitPoints:
        parseInt(action.payload, 10) > state.currentHitPoints
        ? parseInt(action.payload, 10)
        : state.currentHitPoints
      };
    case 'increase_total_hit_points':
      return {
        ...state,
        totalHitPoints: state.totalHitPoints + action.payload
      };
    case 'decrease_total_hit_points':
      return {
        ...state,
        totalHitPoints: state.totalHitPoints > state.currentHitPoints
        ? state.totalHitPoints - action.payload
        : state.currentHitPoints
      };
    default:
      return state;
  }
};
