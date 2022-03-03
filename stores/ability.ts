import { makeAutoObservable } from 'mobx';

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
    makeAutoObservable(this);
  }

  get modifier() {
    return Math.floor((this.score - 10) / 2);
  }
}