import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-v-single-cd',
  templateUrl: './v-single-cd.component.html',
  styleUrls: ['./v-single-cd.component.css']
})
export class VSingleCdComponent implements OnInit {

  idmmm: number; 
  arrCds: object[] = this.sData.sArrCds;
  album: object;

  constructor(public sPath: ActivatedRoute, public sData: DataService) {
    this.idmmm = this.sPath.snapshot.params.id;
    
  }

  ngOnInit() {
  }

  

}


