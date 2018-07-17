export const modifyCurrentHitPoints = (text) => (
  {
    type: 'modify_current_hit_points',
    payload: text
  }
);

export const increaseCurrentHitPoints = () => (
  {
    type: 'increase_current_hit_points',
    payload: 1
  }
);

export const decreaseCurrentHitPoints = () => (
  {
    type: 'decrease_current_hit_points',
    payload: 1
  }
);

export const modifyTotalHitPoints = (text) => (
  {
    type: 'modify_total_hit_points',
    payload: text
  }
);

export const increaseTotalHitPoints = () => (
  {
    type: 'increase_total_hit_points',
    payload: 1
  }
);

export const decreaseTotalHitPoints = () => (
  {
    type: 'decrease_total_hit_points',
    payload: 1
  }
);
