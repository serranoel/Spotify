import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-cd-info',
  templateUrl: './c-cd-info.component.html',
  styleUrls: ['./c-cd-info.component.css']
})
export class CCdInfoComponent implements OnInit {

  id: number; 
  arrCds: object[] = this.sData.sArrCds;
  album: object;

  constructor(public sPath: ActivatedRoute, public sData: DataService) { 
    this.id = this.sPath.snapshot.params.id;
    this.album = this.sData.sSetAlbum(this.id)
  }

  ngOnInit() {

  }

  addAlbumToPlaylists(id:number): void {
    this.sData.sAddAlbumToPlaylists(id)
  }

}
