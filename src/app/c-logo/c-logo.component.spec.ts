import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLogoComponent } from './c-logo.component';

describe('CLogoComponent', () => {
  let component: CLogoComponent;
  let fixture: ComponentFixture<CLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
