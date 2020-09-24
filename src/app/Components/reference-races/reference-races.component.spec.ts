import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceRacesComponent } from './reference-races.component';

describe('ReferenceRacesComponent', () => {
  let component: ReferenceRacesComponent;
  let fixture: ComponentFixture<ReferenceRacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceRacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
