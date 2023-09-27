import { Component } from '@angular/core';
import { Character, defaultCharacter } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css'],
})
export class CharacterFormComponent {
  constructor(private characterService: CharacterService) {}

  character: Character = this.characterService.character;

  handleStatSubtract(stat: keyof Character) {
    this.characterService.subtract(stat);
  }

  handleStatAdd(stat: keyof Character) {
    this.characterService.add(stat);
  }
}
