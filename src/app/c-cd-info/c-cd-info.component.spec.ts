import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCdInfoComponent } from './c-cd-info.component';

describe('CCdInfoComponent', () => {
  let component: CCdInfoComponent;
  let fixture: ComponentFixture<CCdInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCdInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
