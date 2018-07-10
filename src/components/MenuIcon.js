import React from 'react';

import {
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const menuImg = require('../imgs/menu.png');

const MenuIcon = props => (
  <TouchableOpacity
    onPress={() => {
      props.navigation.openDrawer();
    }}
  >
    <Image
      style={styles.imgMenu}
      source={menuImg}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  imgMenu: {
    width: 30,
    height: 30,
    marginLeft: 15
  }
});

export { MenuIcon };
