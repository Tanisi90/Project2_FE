import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceSpellsComponent } from './reference-spells.component';

describe('ReferenceSpellsComponent', () => {
  let component: ReferenceSpellsComponent;
  let fixture: ComponentFixture<ReferenceSpellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceSpellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
