import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSingleCdComponent } from './c-single-cd.component';

describe('CSingleCdComponent', () => {
  let component: CSingleCdComponent;
  let fixture: ComponentFixture<CSingleCdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSingleCdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSingleCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
