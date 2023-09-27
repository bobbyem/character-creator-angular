export interface Character {
  name: string;
  age: number;
  class: CharacterClass;
  gender: CharacterGender;
  strength: number;
  dexterity: number;
  charisma: number;
  intelligence: number;
  endurance: number;
  hitPoints: number;
  mana: number;
  stamina: number;
}

export type CharacterClass = 'mage' | 'knight' | 'bard' | 'thief' | 'cleric';

export type CharacterGender = 'male' | 'female' | 'none';

export const defaultCharacter: Character = {
  name: '',
  age: 18,
  class: 'knight',
  gender: 'male',
  strength: 5,
  dexterity: 5,
  charisma: 3,
  intelligence: 3,
  endurance: 3,
  hitPoints: 10,
  mana: 5,
  stamina: 5,
};
