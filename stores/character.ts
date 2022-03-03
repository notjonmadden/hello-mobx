import { makeAutoObservable } from 'mobx';
import { Ability, abilityNames, AbilityName } from './ability';

export class Character {
  name = '';

  abilities = abilityNames.reduce((o, a) => ({
    ...o,
    [a]: new Ability()
  }), {} as Abilities);

  constructor() {
    makeAutoObservable(this);
  }
}

type Abilities = {
  [Name in AbilityName]: Ability;
};