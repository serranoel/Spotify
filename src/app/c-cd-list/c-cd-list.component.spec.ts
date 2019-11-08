import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCdListComponent } from './c-cd-list.component';

describe('CCdListComponent', () => {
  let component: CCdListComponent;
  let fixture: ComponentFixture<CCdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
