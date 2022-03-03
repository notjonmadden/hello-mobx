import { makeAutoObservable } from 'mobx';
import { Item } from '../lib/types';

export class Inventory {
  items: Item[] = [];

  constructor() {
    makeAutoObservable(this);
  }
}