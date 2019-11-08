import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPlayerComponent } from './c-player.component';

describe('CPlayerComponent', () => {
  let component: CPlayerComponent;
  let fixture: ComponentFixture<CPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
