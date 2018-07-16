export const modifyName = (text) => (
  {
    type: 'modify_name',
    payload: text
  }
);

export const modifyLevel = (text) => (
  {
    type: 'modify_level',
    payload: text
  }
);

export const increaseLevel = () => (
  {
    type: 'increase_level',
    payload: 1
  }
);

export const decreaseLevel = () => (
  {
    type: 'decrease_level',
    payload: 1
  }
);
