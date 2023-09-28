import { Component } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.css'],
})
export class CharacterSummaryComponent {
  constructor(public characterService: CharacterService) {}
}
