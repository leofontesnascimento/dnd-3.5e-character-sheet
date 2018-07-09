import {
  createDrawerNavigator
} from 'react-navigation';

import CharacterTabsNavigator from './CharacterTabsNavigator';
import InventoryTabsNavigator from './InventoryTabsNavigator';

export default createDrawerNavigator({
  Character: { screen: CharacterTabsNavigator },
  Inventory: { screen: InventoryTabsNavigator }
});
