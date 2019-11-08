import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VHomeComponent } from './v-home/v-home.component';
import { VSingleCdComponent } from './v-single-cd/v-single-cd.component';
import { CLogoComponent } from './c-logo/c-logo.component';
import { CMenuComponent } from './c-menu/c-menu.component';
import { CPlaylistsComponent } from './c-playlists/c-playlists.component';
import { CHorinzontalMenuComponent } from './c-horinzontal-menu/c-horinzontal-menu.component';
import { CSectionComponent } from './c-section/c-section.component';
import { CSingleCdComponent } from './c-single-cd/c-single-cd.component';
import { CPlayerComponent } from './c-player/c-player.component';
import { CTracklistComponent } from './c-tracklist/c-tracklist.component';
import { CCdInfoComponent } from './c-cd-info/c-cd-info.component';
import { DataService } from './service/data.service';

const routerConfig: Routes = [
  { "path": "", "component": VHomeComponent },
  { "path": "home", "component": VHomeComponent },
  { "path": "album/:id", "component": VSingleCdComponent },
  { "path": "**", "component": VHomeComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    VHomeComponent,
    VSingleCdComponent,
    CLogoComponent,
    CMenuComponent,
    CPlaylistsComponent,
    CHorinzontalMenuComponent,
    CSectionComponent,
    CSingleCdComponent,
    CPlayerComponent,
    CTracklistComponent,
    CCdInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig, {useHash: true}) 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }




       
       