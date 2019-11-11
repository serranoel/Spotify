import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-player',
  templateUrl: './c-player.component.html',
  styleUrls: ['./c-player.component.css']
})
export class CPlayerComponent {

  // playing: boolean = this.sData.sPlaying;

  playing: boolean = this.sData.sPlaying;  
  id: number;
  album: object;
  clickedSong: boolean = this.sData.sClickedSong;
  
  constructor(public sPath: ActivatedRoute, public sData: DataService) { 
    this.id = this.sPath.snapshot.params.id;
    this.album = this.sData.sSetAlbum(this.id);
  }

  isPlaying(): void {
    this.sData.sIsPLaying()      
  }

  playSong(): void {
    (<HTMLAudioElement>document.getElementById('player')).play();
    (<HTMLTextAreaElement>document.querySelectorAll(".play-button")[0]).className += " d-none";
    (<HTMLTextAreaElement>document.querySelectorAll(".pause-button")[0]).className = "player-button pause-button";
    console.log("De pausa a play")
  }

  pauseSong(): void {
    (<HTMLAudioElement>document.getElementById('player')).pause();
    (<HTMLTextAreaElement>document.querySelectorAll(".play-button")[0]).className = "player-button play-button";
    (<HTMLTextAreaElement>document.querySelectorAll(".pause-button")[0]).className += " d-none";
    console.log("De play a pausa")
  }

  turnUpVolum(): void {
    (<HTMLAudioElement>document.getElementById('player')).volume += 0.1;
  }

 turnDownVolum(): void {
    (<HTMLAudioElement>document.getElementById('player')).volume -= 0.1;
  }

  truquitoTemporal() {
    return this.sData.sSong['link'];
  }
  


  


}
