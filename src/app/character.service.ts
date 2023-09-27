import { Injectable } from '@angular/core';
import {
  Character,
  CharacterClass,
  CharacterGender,
  defaultCharacter,
} from './character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  character: Character = defaultCharacter;

  constructor() {}

  subtract(stat: keyof Character) {
    --this.character[stat];
    console.log(stat + this.character[stat]);
  }

  add(stat: keyof Character) {
    ++this.character[stat];
    console.log(stat + this.character[stat]);
  }

  changeName(name: string) {
    this.character.name = name;
  }

  changeGender(gender: CharacterGender) {
    this.character.gender = gender;
  }

  changeClass(newClass: CharacterClass) {
    this.character.class = newClass;
  }
}
