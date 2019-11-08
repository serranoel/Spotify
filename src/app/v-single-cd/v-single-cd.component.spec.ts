import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSingleCdComponent } from './v-single-cd.component';

describe('VSingleCdComponent', () => {
  let component: VSingleCdComponent;
  let fixture: ComponentFixture<VSingleCdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSingleCdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSingleCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
