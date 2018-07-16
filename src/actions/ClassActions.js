export const modifyClassName = (text) => (
  {
    type: 'modify_class_name',
    payload: text
  }
);

export const modifyClassLevel = (text) => (
  {
    type: 'modify_class_level',
    payload: text
  }
);

export const increaseClassLevel = () => (
  {
    type: 'increase_class_level',
    payload: 1
  }
);

export const decreaseClassLevel = () => (
  {
    type: 'decrease_class_level',
    payload: 1
  }
);
