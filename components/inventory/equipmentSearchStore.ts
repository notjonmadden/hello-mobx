import { flow, makeObservable, observable } from 'mobx';
import { Item } from '../../lib/types';

export class EquipmentStore {
  items: Item[] = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      search: flow
    });
  }

  *search() {
    const res: Response = yield fetch(url);
    const json = yield res.json();
    
    this.items = json.equipment;
  }
}

const url = 'https://www.dnd5eapi.co/api/equipment-categories/weapon';