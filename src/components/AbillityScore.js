import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
  Label
} from './Label';

const AbillityScore = props => (
  <View style={styles.container}>
    <View style={styles.viewAbillity}>
      <View style={styles.viewAcronymAbillity}>
        <Label
          light
          label={props.acronym}
        />
      </View>
      <View style={styles.viewTitleAbillity}>
        <Label label={props.abillity} />
      </View>
    </View>
    <View style={styles.viewScore}>
      <Label label={props.score} />
    </View>
    <View style={styles.viewModifier}>
      <Label label={props.modifier} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 2
  },
  viewAbillity: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#FFF'
  },
  viewAcronymAbillity: {
    flex: 1,
    backgroundColor: '#FA6900',
    justifyContent: 'center'
  },
  viewTitleAbillity: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10
  },
  viewScore: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginLeft: 4
  },
  viewModifier: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginLeft: 4
  }
});

export { AbillityScore };
