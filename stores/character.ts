import { computed, makeObservable, observable } from 'mobx';
import { Ability, abilityNames, AbilityName } from './ability';

export class Character {
  name = '';

  private _abilities = abilityNames.reduce((o, a) => ({
    ...o,
    [a]: new Ability()
  }), {} as Abilities);

  constructor() {
    makeObservable(this, {
      name: observable,
      abilities: computed
    });
  }

  get abilities() {
    return this._abilities;
  }
}

type Abilities = {
  [Name in AbilityName]: Ability;
};