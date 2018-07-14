export const modifyCurrent = (text) => (
  {
    type: 'modify_current',
    payload: text
  }
);

export const increaseCurrent = () => (
  {
    type: 'increase_current',
    payload: 1
  }
);

export const decreaseCurrent = () => (
  {
    type: 'decrease_current',
    payload: 1
  }
);

export const modifyTotal = (text) => (
  {
    type: 'modify_total',
    payload: text
  }
);

export const increaseTotal = () => (
  {
    type: 'increase_total',
    payload: 1
  }
);

export const decreaseTotal = () => (
  {
    type: 'decrease_total',
    payload: 1
  }
);
