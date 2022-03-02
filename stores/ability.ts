import { computed, makeObservable, observable } from 'mobx';

export const abilityNames = [
  'strength',
  'dexterity',
  'constitution',
  'wisdom',
  'intelligence',
  'charisma'
] as const;

export type AbilityName = (typeof abilityNames)[number]

export class Ability {
  score = 10;

  constructor() {
    makeObservable(this, {
      score: observable,
      modifier: computed
    });
  }

  get modifier() {
    return Math.floor((this.score - 10) / 2);
  }
}