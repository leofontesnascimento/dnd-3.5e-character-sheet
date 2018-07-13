import React, { Component } from 'react';

import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

import {
  Skill,
  SmallLabel,
  SectionHeader
} from '../components';

class SkillsTab extends Component {
  static navigationOptions = {
    title: 'Character',
  };

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
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Appraise'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Autohypnosis'
                  abillityAcronym='WIS'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty
                  skillName='Balance'
                  abillityAcronym='DEX'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Bluff'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty
                  skillName='Climb'
                  abillityAcronym='STR'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Concentration'
                  abillityAcronym='CON'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Craft'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Craft'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Craft'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Decipher Script'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Diplomacy'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Disable Device'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Disguise'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty
                  skillName='Escape Artist'
                  abillityAcronym='DEX'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Forgery'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Gather Information'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Handle Animal'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Heal'
                  abillityAcronym='WIS'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty
                  skillName='Hide'
                  abillityAcronym='DEX'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Intimidate'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty
                  skillName='Jump'
                  abillityAcronym='STR'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Knowledge (Arcana)'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Knowledge (Arch/Eng)'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Knowledge (Dungeoneering)'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Knowledge (Geography)'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Knowledge (History)'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Knowledge (Local)'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Knowledge (Nature)'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Knowledge (Nobility/Royalty)'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Knowledge (The Planes)'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Knowledge (Psionics)'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Knowledge (Religion)'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Knowledge'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Listen'
                  abillityAcronym='WIS'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty
                  skillName='Move Silently'
                  abillityAcronym='DEX'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Open Lock'
                  abillityAcronym='DEX'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Perform (Act)'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Perform (Comedy)'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Perform (Dance)'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Perform (Keyboard)'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Perform (Oratory)'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Perform (Percussion)'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Perform (String Instrument)'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Perform (Wind Instrument)'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Perform (Sing)'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Perform'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Profession'
                  abillityAcronym='WIS'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Profession'
                  abillityAcronym='WIS'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Psicraft'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Ride'
                  abillityAcronym='DEX'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Search'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Sense Motive'
                  abillityAcronym='WIS'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty
                  skillName='Sleight of Hand'
                  abillityAcronym='DEX'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Spellcraft'
                  abillityAcronym='INT'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Spot'
                  abillityAcronym='WIS'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Survival'
                  abillityAcronym='WIS'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty
                  skillName='Swim'
                  abillityAcronym='STR'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty
                  skillName='Tumble'
                  abillityAcronym='DEX'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Use Magic Device'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained={false}
                  armorPenalty={false}
                  skillName='Use Psionic Device'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
                <Skill
                  classSkill={false}
                  untrained
                  armorPenalty={false}
                  skillName='Use Rope'
                  abillityAcronym='CHA'
                  skillModifier='0'
                />
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
