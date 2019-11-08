import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-player',
  templateUrl: './c-player.component.html',
  styleUrls: ['./c-player.component.css']
})
export class CPlayerComponent {


  constructor(public sData: DataService) { 
    
  }

  changeSong() {
      
  }


}
