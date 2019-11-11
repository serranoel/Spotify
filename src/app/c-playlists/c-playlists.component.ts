import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-c-playlists',
  templateUrl: './c-playlists.component.html',
  styleUrls: ['./c-playlists.component.css']
})
export class CPlaylistsComponent implements OnInit {

  arrPlaylist: object[] = this.sData.sArrPlaylist;
  clicked: boolean = false;
  dropdownId: string;
  styleProperties: object;


  constructor(public sData: DataService) { }

  ngOnInit() {
  }  

  deletePlaylist(id: string): void {
    this.sData.sDeletePlaylist(id);
    this.clicked = false;
  }

  showDropdown(event, activation: boolean, id: string): void {
    this.styleProperties = {
      "top": `${event.pageY - 216}px`,
      "left": `${event.pageX + 13}px`,
      "position": "absolute"
    }
    this.clicked = activation;
    event.preventDefault();
  }

  hideDropdown(desactivation: boolean): void {
    this.clicked = desactivation;
  }
  // }).on("click", function() {
  //   $("#context-menu").removeClass("show").hide();
  // });
  
  // $("#context-menu a").on("click", function() {
  //   $(this).parent().removeClass("show").hide();
  // });

  
}
