import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSummaryComponent } from './character-summary.component';

describe('CharacterSummaryComponent', () => {
  let component: CharacterSummaryComponent;
  let fixture: ComponentFixture<CharacterSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSummaryComponent]
    });
    fixture = TestBed.createComponent(CharacterSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
