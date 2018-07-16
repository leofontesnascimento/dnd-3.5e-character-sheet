import React from 'react';

import {
  Button,
  StyleSheet,
  View
} from 'react-native';

import {
  NumberIn,
  TextIn,
  SmallLabel
} from './';

const StatusInput = props => {
  if (props.number) {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          <View style={styles.viewButton}>
            <Button
              title='-'
              color='#FA6900'
              onPress={() => {
                switch (props.context) {
                  case 'currentHitPoints':
                    props.decreaseCurrent();
                    break;
                  case 'totalHitPoints':
                    props.decreaseTotal();
                    break;
                  case 'classLevel':
                    props.decreaseClassLevel();
                    break;
                  default:
                    break;
                }
              }}
            />
          </View>
          <View style={styles.viewInput}>
            <View style={styles.viewLabel}>
              <SmallLabel label={props.label} />
            </View>
            <View style={styles.viewValue}>
              <NumberIn
                value={props.value}
                context={props.context}
                modifyCurrent={props.modifyCurrent}
                modifyTotal={props.modifyTotal}
                modifyClassLevel={props.modifyClassLevel}
              />
            </View>
          </View>
          <View style={styles.viewButton}>
            <Button
              title='+'
              color='#FA6900'
              onPress={() => {
                switch (props.context) {
                  case 'currentHitPoints':
                    props.increaseCurrent();
                    break;
                  case 'totalHitPoints':
                    props.increaseTotal();
                    break;
                  case 'classLevel':
                    props.increaseClassLevel();
                    break;
                  default:
                    break;
                }
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewLabel}>
        <SmallLabel label={props.label} />
      </View>
      <View style={styles.viewValue}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: '100%'
            }}
          >
            <TextIn
              value={props.value}
              context={props.context}
              modifyClassName={props.modifyClassName}
              modifyRaceName={props.modifyRaceName}
              modifyHitDice={props.modifyHitDice}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  },
  viewValue: {
    backgroundColor: '#FFF',
    marginTop: 5
  },
  viewInput: {
    flex: 3,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  },
  viewButton: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export { StatusInput };
