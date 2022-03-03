import { CSSProperties } from "react";
import { Character } from '../stores/character';
import { observer } from 'mobx-react-lite';
import { Ability, abilityNames } from '../stores/ability';
import Inventory from './inventory';

export const CharacterSheet = observer(({ character }: { character: Character }) => {
  return (
    <article>
      <section style={sectionStyle}>
        <label style={labelStyle}>
          Name
          <input
            type="text"
            value={character.name}
            onChange={(e) => character.name = e.target.value}
          />
        </label>
      </section>
      <section style={sectionStyle}>
        {abilityNames.map((name) => (
          <label style={labelStyle}>
            <span style={{ flex: "1" }}>{name}</span>
            <Score ability={character.abilities[name]} />
            <span>({formatModifier(character.abilities[name].modifier)})</span>
          </label>
        ))}
      </section>
      <section style={sectionStyle}>
        <Inventory inventory={character.inventory} />
      </section>
    </article>
  );

  function formatModifier(modifier: number) {
    return Intl.NumberFormat("en-US", { signDisplay: "always" }).format(
      modifier
    );
  }
});

const Score = observer(({ ability }: { ability: Ability }) => {
  return (
    <input type="number" value={ability.score} onChange={(e) => ability.score = +e.target.value} />
  );
});

const sectionStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "325px",
};

const labelStyle: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  gap: "4px",
};

export default function CharacterSheetConnector() {
  const character = new Character();

  return <CharacterSheet character={character} />;
}