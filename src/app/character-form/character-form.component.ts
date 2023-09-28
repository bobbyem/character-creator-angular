import { Component } from '@angular/core';
import { Character, CharacterClass, CharacterGender } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css'],
})
export class CharacterFormComponent {
  constructor(public characterService: CharacterService) {}

  handleStatSubtract(stat: keyof Character) {
    this.characterService.subtract(stat);
  }

  handleStatAdd(stat: keyof Character) {
    this.characterService.add(stat);
  }
}
