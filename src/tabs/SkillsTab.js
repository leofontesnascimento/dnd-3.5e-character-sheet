import React, { Component } from 'react';

import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import {
  Skill,
  SmallLabel,
  SectionHeader
} from '../components';

import { SkillsList } from '../lists';

class SkillsTab extends Component {
  static navigationOptions = {
    title: 'Character',
  };

  generateSkillViews() {
    const skillViews = [];
    for (let i = 0; i < SkillsList.length; i++) {
      const item = SkillsList[i];
      skillViews.push(
        <TouchableOpacity
          key={i}
          style={{
            flex: 1
          }}
          onLongPress={() => {
            this.props.navigation.navigate(
              'SkillModal',
              {
                skillName: item.skillName
              }
            );
          }}
        >
          <Skill
            key={i}
            classSkill={item.classSkill}
            untrained={item.untrained}
            armorPenalty={item.armorPenalty}
            skillName={item.skillName}
            abillityAcronym={item.abillityAcronym}
            skillModifier={item.skillModifier}
          />
        </TouchableOpacity>
      );
    }
    return skillViews;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.skills}>
          <View style={styles.viewHeader}>
            <SectionHeader title='Skills' />
          </View>
          <View style={styles.viewTitles}>
            <View style={styles.titleCS}>
              <SmallLabel label='Cs?' />
            </View>
            <View style={styles.titleUntrained}>
              <SmallLabel label='Ut?' />
            </View>
            <View style={styles.titleArmorPenalty}>
              <SmallLabel label='Ap?' />
            </View>
            <View style={styles.titleSkillName}>
              <SmallLabel label='Skill' />
            </View>
            <View style={styles.titleAbillityAcronym}>
              <SmallLabel label='Abillity' />
            </View>
            <View style={styles.titleSkillModifier}>
              <SmallLabel label='Mod' />
            </View>
          </View>
          <View style={styles.viewSkills}>
            <ScrollView>
              <View style={styles.viewScrollView}>
                {
                  this.generateSkillViews()
                }
                <View style={styles.viewLegend}>
                  <SmallLabel label='Cs? -> Class skill?' />
                  <SmallLabel label='Ut? -> Denotes a skill that can be used untrained.' />
                  <SmallLabel label='Ap? -> Armor cleck penalty, ifany, applies. (2x for Swim)' />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingBottom: 5
  },
  skills: {
    flex: 1
  },
  viewHeader: {
    flex: 1,
    padding: 15
  },
  viewTitles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  titleCS: {
    flex: 1
  },
  titleUntrained: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleArmorPenalty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleSkillName: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 4,
    paddingLeft: 5
  },
  titleAbillityAcronym: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 4
  },
  titleSkillModifier: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  viewSkills: {
    flex: 18,
  },
  viewScrollView: {
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  viewLegend: {
    marginTop: 15
  }
});

export { SkillsTab };
