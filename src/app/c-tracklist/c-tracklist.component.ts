import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-tracklist',
  templateUrl: './c-tracklist.component.html',
  styleUrls: ['./c-tracklist.component.css']
})
export class CTracklistComponent implements OnInit {

  id: number;
  album: object;
  song: string = this.sData.sSong;

  constructor(public sPath: ActivatedRoute, public sData: DataService) { 
    this.id = this.sPath.snapshot.params.id;
    this.album = this.sData.sSetAlbum(this.id);
  }

  ngOnInit() {
  }

  setSong(id: number, songName: string): void {
    this.sData.sSetSong(id, songName);
  }

}
