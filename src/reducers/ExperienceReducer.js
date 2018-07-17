const INITIAL_STATE = {
  currentExperience: 0,
  totalExperience: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modify_current_experience':
      return {
        ...state,
        currentExperience:
        parseInt(action.payload, 10) < state.totalExperience
        ? parseInt(action.payload, 10)
        : state.totalExperience
      };
    case 'increase_current_experience':
      return {
        ...state,
        currentExperience:
        state.currentExperience < state.totalExperience
        ? state.currentExperience + action.payload
        : state.totalExperience
      };
    case 'decrease_current_experience':
      return {
        ...state,
        currentExperience:
        state.currentExperience > 0
        ? state.currentExperience - action.payload
        : 0
      };
    case 'modify_total_experience':
      return {
        ...state,
        totalExperience:
        parseInt(action.payload, 10) > state.currentExperience
        ? parseInt(action.payload, 10)
        : state.currentExperience
      };
    case 'increase_total_experience':
      return {
        ...state,
        totalExperience: state.totalExperience + action.payload
      };
    case 'decrease_total_experience':
      return {
        ...state,
        totalExperience:
        state.totalExperience > state.currentExperience
        ? state.totalExperience - action.payload
        : state.currentExperience
      };
    default:
      return state;
  }
};
