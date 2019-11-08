import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPlaylistsComponent } from './c-playlists.component';

describe('CPlaylistsComponent', () => {
  let component: CPlaylistsComponent;
  let fixture: ComponentFixture<CPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
