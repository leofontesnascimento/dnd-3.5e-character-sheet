export const modifyRaceName = text => (
  {
    type: 'modify_race_name',
    payload: text
  }
);

export const modifyHitDice = text => (
  {
    type: 'modify_hit_dice',
    payload: text
  }
);
