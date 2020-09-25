import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceSpellsSplashComponent } from './reference-spells-splash.component';

describe('ReferenceSpellsSplashComponent', () => {
  let component: ReferenceSpellsSplashComponent;
  let fixture: ComponentFixture<ReferenceSpellsSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceSpellsSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceSpellsSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
