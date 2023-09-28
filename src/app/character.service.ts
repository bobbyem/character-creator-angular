import { Injectable } from '@angular/core';
import {
  Character,
  CharacterClass,
  CharacterGender,
  defaultCharacter,
} from './character';
import { portraits } from 'src/assets/img/portraits/portraits';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  character: Character = defaultCharacter;
  statPoints: number = 10;

  constructor() {
    this.initializeService();
  }

  subtract(stat: keyof Character) {
    const statValue = Number(this.character[stat]);

    if (!isNaN(statValue) && statValue > 0) {
      --this.character[stat];
      ++this.statPoints;
      return;
    }
    console.log("Can't lower stat more than 0");
  }

  add(stat: keyof Character) {
    if (this.statPoints > 0) {
      ++this.character[stat];
      --this.statPoints;
    }
  }

  changeName(name: string) {
    this.character.name = name;
  }

  changeGender(gender: CharacterGender) {
    this.character.gender = gender;
    this.updatePortrait();
  }

  changeClass(newClass: CharacterClass) {
    this.character.class = newClass;
    this.updatePortrait();
  }

  updatePortrait() {
    const portraitSRC:
      | string
      | undefined = `${this.character.class}_${this.character.gender}.png`;
    const portrait: string = portraits.find((p) => p === portraitSRC) || '';

    this.character.portrait = '../assets/img/portraits/' + portrait;
  }

  initializeService() {
    this.updatePortrait();
    console.log('CharacterService initialized');
  }
}
