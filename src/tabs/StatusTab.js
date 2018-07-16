import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import {
  Class,
  CombatBaseAttack,
  CombatInitiative,
  Experience,
  HitPoints,
  Race,
  SectionHeader
} from '../components';

import {
  increaseCurrent,
  decreaseCurrent,
  modifyCurrent,
  modifyTotal
} from '../actions/HitPointsActions';

import {
  retrieveData
} from '../storage/Storage';

class StatusTab extends Component {
  static navigationOptions = {
    title: 'Character',
  };

  componentWillMount() {
    retrieveData('@DnDSuperStore:totalHitPoints')
      .then((total) => {
        this.props.modifyTotal(total.toString());
      });

    retrieveData('@DnDSuperStore:currentHitPoints')
      .then((current) => {
        this.props.modifyCurrent(current.toString());
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.status}>
          <View style={styles.header}>
            <SectionHeader title='Status' />
          </View>
          <View style={styles.content}>
            <TouchableOpacity
              style={{
                flex: 2
              }}
              onLongPress={() => {
                this.props.navigation.navigate('HitPointsModal');
              }}
            >
              <HitPoints
                current={this.props.currentHitPoints}
                total={this.props.totalHitPoints}
                context='currentHitPoints'
                increaseCurrent={this.props.increaseCurrent}
                decreaseCurrent={this.props.decreaseCurrent}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 2
              }}
              onLongPress={() => {
                this.props.navigation.navigate('ClassModal');
              }}
            >
              <Class
              charClass='Cleric'
              lvl='1'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 2
              }}
              onLongPress={() => {
                this.props.navigation.navigate('RaceModal');
              }}
            >
              <Race
                race='Dwarf'
                hitDice='1d8'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1
              }}
              onLongPress={() => {
                this.props.navigation.navigate('ExperienceModal');
              }}
            >
              <Experience
                current='150'
                total='300'
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.combat}>
          <View style={styles.header}>
            <SectionHeader title='Combat' />
          </View>
          <View style={styles.content}>
            <CombatInitiative
              initiative='2'
              armorClass='12'
              speed='30'
              grappleModifier='5'
              navigation={this.props.navigation}
            />
            <CombatBaseAttack
              baseAttackBonus='5'
              touchArmorClass='10'
              flatFootedArmorClass='8'
              spellResistence='9'
              navigation={this.props.navigation}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  status: {
    flex: 1.3
  },
  combat: {
    flex: 1
  },
  header: {
    flex: 1,
    padding: 15
  },
  content: {
    flex: 12
  }
});

const mapStateToProps = state => (
  {
    currentHitPoints: state.HitPointsReducer.current,
    totalHitPoints: state.HitPointsReducer.total
  }
);

const actionCreators = {
  increaseCurrent,
  decreaseCurrent,
  modifyCurrent,
  modifyTotal
};

export default connect(mapStateToProps, actionCreators)(StatusTab);
