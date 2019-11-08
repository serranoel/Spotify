import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-c-single-cd',
  templateUrl: './c-single-cd.component.html',
  styleUrls: ['./c-single-cd.component.css']
})
export class CSingleCdComponent implements OnInit {

  arrCds: object = this.sData.sArrCds;

  constructor(public sData: DataService) { }

  ngOnInit() {
  }

}
