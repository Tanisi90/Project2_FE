import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceClassesComponent } from './reference-classes.component';

describe('ReferenceClassesComponent', () => {
  let component: ReferenceClassesComponent;
  let fixture: ComponentFixture<ReferenceClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
