const INITIAL_STATE = {
  initiative: 0,
  iniDexModifier: 0,
  iniMiscModifier: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modify_initiative':
      return {
        ...state,
        initiative: state.iniDexModifier + state.iniMiscModifier
      };
    case 'modify_ini_dex_modifier':
      return {
        ...state,
        iniDexModifier:
        parseInt(action.payload, 10) > 0
        ? parseInt(action.payload, 10)
        : 0
      };
    case 'increase_ini_dex_modifier':
      return {
        ...state,
        iniDexModifier: state.iniDexModifier + action.payload
      };
    case 'decrease_ini_dex_modifier':
      return {
        ...state,
        iniDexModifier:
        state.iniDexModifier > 0
        ? state.iniDexModifier - action.payload
        : 0
      };
    case 'modify_ini_misc_modifier':
      return {
        ...state,
        iniMiscModifier:
        parseInt(action.payload, 10) > 0
        ? parseInt(action.payload, 10)
        : 0
      };
    case 'increase_ini_misc_modifier':
      return {
        ...state,
        iniMiscModifier: state.iniMiscModifier + action.payload
      };
    case 'decrease_ini_misc_modifier':
      return {
        ...state,
        iniMiscModifier:
        state.iniMiscModifier > 0
        ? state.iniMiscModifier - action.payload
        : 0
      };
    default:
      return state;

  }
};
