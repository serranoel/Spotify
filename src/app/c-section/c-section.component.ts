import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-c-section',
  templateUrl: './c-section.component.html',
  styleUrls: ['./c-section.component.css']
})
export class CSectionComponent implements OnInit {

  sectionTitles: string[] = this.sData.sSectionTitles;

  constructor(public sData: DataService) { }

  ngOnInit() {
  }

}
