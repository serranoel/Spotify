import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CHorinzontalMenuComponent } from './c-horinzontal-menu.component';

describe('CHorinzontalMenuComponent', () => {
  let component: CHorinzontalMenuComponent;
  let fixture: ComponentFixture<CHorinzontalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHorinzontalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHorinzontalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
