import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersNewComponent } from './characters-new.component';

describe('CharactersNewComponent', () => {
  let component: CharactersNewComponent;
  let fixture: ComponentFixture<CharactersNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
