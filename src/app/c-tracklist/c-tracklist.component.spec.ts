import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTracklistComponent } from './c-tracklist.component';

describe('CTracklistComponent', () => {
  let component: CTracklistComponent;
  let fixture: ComponentFixture<CTracklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTracklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTracklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
