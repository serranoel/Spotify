import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-c-playlists',
  templateUrl: './c-playlists.component.html',
  styleUrls: ['./c-playlists.component.css']
})
export class CPlaylistsComponent implements OnInit {

  data: object

  constructor(public sData: DataService) { }

  ngOnInit() {
  }

  addPlaylist() {

  }

}
