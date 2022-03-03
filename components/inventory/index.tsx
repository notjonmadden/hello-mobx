import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { Item } from '../../lib/types';
import { Inventory as InventoryStore } from '../../stores/inventory';
import { EquipmentStore } from './equipmentSearchStore';

export interface Props {
  items: Item[];
  heldItems: Item['index'][];
  onAdd: (item: Item) => void;
}

export function Inventory({ items, heldItems, onAdd }: Props) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.index} onClick={() => onAdd(item)}>
          {item.name}
          {heldItems.filter(i => i === item.index).map(() => '✅').join('')}
        </li>
      ))}
    </ul>
  )
}

export default observer(function InventoryConnector({ inventory }: { inventory: InventoryStore }) {
  useEffect(() => {
    equipment.search();
  }, []);

  return <Inventory
    items={equipment.items}
    onAdd={item => inventory.items.push(item)}
    heldItems={inventory.items.map(i => i.index)}
  />;
});

const equipment = new EquipmentStore();
