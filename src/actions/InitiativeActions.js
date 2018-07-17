export const modifyInitiative = () => (
  {
    type: 'modify_initiative'
  }
);

export const modifyIniDexModifier = text => (
  {
    type: 'modify_ini_dex_modifier',
    payload: text
  }
);

export const increaseIniDexModifier = () => (
  {
    type: 'increase_ini_dex_modifier',
    payload: 1
  }
);

export const decreaseIniDexModifier = () => (
  {
    type: 'decrease_ini_dex_modifier',
    payload: 1
  }
);

export const modifyIniMiscModifier = text => (
  {
    type: 'modify_ini_misc_modifier',
    payload: text
  }
);

export const increaseIniMiscModifier = () => (
  {
    type: 'increase_ini_misc_modifier',
    payload: 1
  }
);

export const decreaseIniMiscModifier = () => (
  {
    type: 'decrease_ini_misc_modifier',
    payload: 1
  }
);
