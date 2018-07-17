export const modifyCurrentExperience = text => (
  {
    type: 'modify_current_experience',
    payload: text
  }
);

export const increaseCurrentExperience = () => (
  {
    type: 'increase_current_experience',
    payload: 1
  }
);

export const decreaseCurrentExperience = () => (
  {
    type: 'decrease_current_experience',
    payload: 1
  }
);

export const modifyTotalExperience = text => (
  {
    type: 'modify_total_experience',
    payload: text
  }
);

export const increaseTotalExperience = () => (
  {
    type: 'increase_total_experience',
    payload: 1
  }
);

export const decreaseTotalExperience = () => (
  {
    type: 'decrease_total_experience',
    payload: 1
  }
);
