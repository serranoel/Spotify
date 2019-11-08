import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSectionComponent } from './c-section.component';

describe('CSectionComponent', () => {
  let component: CSectionComponent;
  let fixture: ComponentFixture<CSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
