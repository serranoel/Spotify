import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-c-playlists',
  templateUrl: './c-playlists.component.html',
  styleUrls: ['./c-playlists.component.css']
})
export class CPlaylistsComponent implements OnInit {

  data: object;
  arrPlaylist: object[] = this.sData.sArrPlaylist;
  playlistId: string;

  constructor(public sData: DataService) { }

  ngOnInit() {
  }

  deletePlaylist(event, id: string): void {
    this.sData.sDeletePlaylist(event, id);
  }
  

  
}
