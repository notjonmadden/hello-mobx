import { makeAutoObservable } from 'mobx';
import { Ability, abilityNames, AbilityName } from './ability';
import { Inventory } from './inventory';

export class Character {
  name = '';

  abilities = abilityNames.reduce((o, a) => ({
    ...o,
    [a]: new Ability()
  }), {} as Abilities);

  inventory = new Inventory();

  constructor() {
    makeAutoObservable(this);
  }
}

type Abilities = {
  [Name in AbilityName]: Ability;
};