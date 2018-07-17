import React, { Component } from 'react';

import {
  Button,
  StyleSheet,
  View
} from 'react-native';

import {
  LargeLabel,
  SmallLabel
} from '../components';

import {
  storeData
} from '../storage/Storage';

let firstUpdate = true;

class HitPoints extends Component {
  componentDidUpdate() {
    if (!firstUpdate) {
      storeData({
        key: '@DnDSuperStore:currentHitPoints',
        value: this.props.currentHitPoints
      });
    }

    firstUpdate = false;
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <SmallLabel label={'Hit Points'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <View style={styles.btnHitPoints}>
            <Button
              title='-'
              color='#FA6900'
              onPress={() => {
                switch (this.props.context) {
                  case 'currentHitPoints':
                    this.props.decreaseCurrentHitPoints();
                    break;
                  default:
                    break;
                }
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <LargeLabel label={this.props.currentHitPoints.toString()} />
            <SmallLabel label=' / ' />
            <SmallLabel label={this.props.totalHitPoints.toString()} />
          </View>
          <View style={styles.btnHitPoints}>
            <Button
              title='+'
              color='#FA6900'
              onPress={() => {
                switch (this.props.context) {
                  case 'currentHitPoints':
                    this.props.increaseCurrentHitPoints();
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
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  btnHitPoints: {
    width: 50
  }
});

export { HitPoints };
