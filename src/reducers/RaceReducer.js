const INITIAL_STATE = {
  raceName: ' ',
  hitDice: ' '
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modify_race_name':
      return {
        ...state,
        raceName: action.payload
      };
    case 'modify_hit_dice':
      return {
        ...state,
        hitDice: action.payload
      };
    default:
      return state;
  }
};
