import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sSectionTitles: string[] = ["Tu música de uso intensivo", "Vuelve a escuchar"];
  sArrPlaylist: object[] = [ ];
  sArrCds: object[] = [
      {
        id: 1,
        artist: "Rels B",
        title: "Happy Birthday Flakko",
        year: 2019,
        image: "../../assets/albumCover/happybirthdayflakko.jpg",
        canciones: [ 
          { name: "Happy  Birthday Flakko", duration: "0:29", feat: "", link: "RelsB/happybirthdayflakko.mp3" }, 
          { name: "¿Y tú qué?", duration: "3:06", feat: "", link: "RelsB/ytuque.mp3"},
          { name: "Orgullo", duration: "3:06", feat: "", link: "RelsB/orgullo.mp3" },
          { name: "Sin mirar las señales", duration: "3:01", feat: "", link: "RelsB/sinmirarlasseñales.mp3" },
          { name: "¿Cómo te va, querida?", duration: "3:28", feat: ", Don Patricio", link: "RelsB/comotevaquerida.mp3" },
          { name: "La latina", duration: "3:06", feat: "", link: "RelsB/lalatina.mp3"},
          { name: "Otro cheke", duration: "3:00", feat: ", Duki", link: "RelsB/otrocheke.mp3"},
          { name: "Si no te veo", duration: "3:27", feat: "",  link: "RelsB/sinoteveo.mp3"},
          { name: "Quédate, te quiero", duration: "1:57", feat: "", link: "RelsB/quedatetequiero.mp3"}
        ]
      },
      {
        id: 2,
        artist: "Natos y Waor, Recycled J",
        title: "Hijos de la Ruina, vol. 2",
        year: 2019,
        image: "../../assets/albumCover/hijosdelaruina.jpg",
        canciones: [ 
          { name: "Carretera", duration: "3:34", feat: "", link: "NatosyWaor/carretera.mp3"}, 
          { name: "In love", duration: "5:28", feat: "",  link: "NatosyWaor/inlove.mp3" },
          { name: "Speed", duration: "4:15", feat: "", link: "NatosyWaor/speed.mp3" },
          { name: "Agua y aceite", duration: "3:50", feat: "", link: "NatosyWaor/aguayaceite.mp3" },
          { name: "Carne de cañón", duration: "4:22", feat: "", link: "NatosyWaor/carnedecañon.mp3" },
          { name: "J'suis HDLR", duration: "3:25", feat: "", link: "NatosyWaor/jsuishdlr.mp3" }          
        ]
      },
      {
        id: 3,
        artist: "Moonkey",
        title: "Fuck the World",
        year: 2019,
        image: "../../assets/albumCover/fucktheworld.jpg",
        canciones: [ 
          { name: "Blood", duration: "3:12", feat: ", Nake", link: "Moonkey/blood.mp3" }, 
          { name: "Envidia", duration: "3:12", feat: ", Cypher", link: "Moonkey/envidia.mp3" },
          { name: "Bad boys", duration: "2:48", feat: ", Goa", link: "Moonkey/badboys.mp3" },
          { name: "El diablo me aviso", duration: "3:32", feat: ", Marvin Cruz", link: "Moonkey/eldiablomeaviso.mp3" },
          { name: "Happy Love", duration: "2:08", feat: ", Nake", link: "Moonkey/happylove.mp3" },
          { name: "Guau guau", duration: "2:43", feat: ", Rare Culture", link: "Moonkey/guauguau.mp3" },
          { name: "Lil baby", duration: "3:02", feat: ", Sticky M.A.", link: "Moonkey/lilbaby.mp3" },
          { name: "A veces", duration: "2:53", feat: ", Raul Nadal", link: "Moonkey/aveces.mp3" }     
        ]
      },
      {
        id: 4,
        artist: "Guitarricadelafuente",
        title: "Recopilatorio Andaluz",
        year: 2019,
        image: "../../assets/albumCover/recopilatorioandaluz.jpg",
        canciones: [ 
          { name: "ABC", duration: "2:49", feat: "", link: "Guitarricadelafuente/abc.mp3" }, 
          { name: "Vas a encontrarte", duration: "3:31", feat: "", link: "Guitarricadelafuente/vasaencontrarte.mp3" },
          { name: "Guantanamera", duration: "3:11", feat: "", link: "Guitarricadelafuente/guantanamera.mp3" },
          { name: "Nana triste", duration: "3:07", feat: "", link: "Guitarricadelafuente/nanatriste.mp3" },
          { name: "Agua y mezcal", duration: "3:32", feat: "", link: "Guitarricadelafuente/aguaymezcal.mp3" },
          { name: "Nacido pa ganar", duration: "3:10", feat: "", link: "Guitarricadelafuente/nacidopaganar.mp3" }    
        ]
      },
      {
        id: 5,
        artist: "Paulo Londra",
        title: "Home Run",
        year: 2019,
        image: "../../assets/albumCover/homerun.jpg",
        canciones: [ 
          { name: "Homerun (Intro)", duration: "2:29", feat: "", link: "PauloLondra/homerun.mp3" }, 
          { name: "Tal vez", duration: "4:23", feat: "", link: "PauloLondra/talvez.mp3" },
          { name: "No puedo", duration: "2:55", feat: "", link: "PauloLondra/nopuedo.mp3" },
          { name: "Adan y Eva", duration: "4:16", feat: "", link: "PauloLondra/adanyeva.mp3" },
          { name: "Demasiado loco", duration: "2:46", feat: "", link: "PauloLondra/demasiadoloco.mp3" },
          { name: "Maldita abusadora", duration: "4:10", feat: "", link: "PauloLondra/malditaabusadora.mp3" },
          { name: "Y yo no sé", duration: "3:10", feat: "", link: "PauloLondra/yyonose.mp3" },    
          { name: "So fresh", duration: "2:47", feat: "", link: "PauloLondra/sofresh.mp3" },
          { name: "Querido amigo", duration: "3:48", feat: "", link: "PauloLondra/queridoamigo.mp3" },
          { name: "Romeo y Julieta", duration: "3:01", feat: "", link: "PauloLondra/romeoyjulieta.mp3" },
          { name: "Por eso vine", duration: "2:58", feat: "", link: "PauloLondra/poresovine.mp3" },
          { name: "Solo pienso en ti", duration: "4:28", feat: ", Justin Quiles", link: "PauloLondra/solopiensoenti.mp3" },
          { name: "Forever alone", duration: "3:34", feat: "", link: "PauloLondra/foreveralone.mp3" },
          { name: "Condenado para el millón", duration: "3:42", feat: "", link: "PauloLondra/condenadoparaelmillon.mp3"},
          { name: "Nena maldición", duration: "3:47", feat: ", Lenny Tavárez", link: "PauloLondra/nenamaldicion.mp3" },
          { name: "Dímelo", duration: "3:32", feat: "", link: "PauloLondra/dimelo.mp3" },
          { name: "Chica paranormal", duration: "3:41", feat: "", link: "PauloLondra/chicaparanormal.mp3" },
          { name: "Sigan hablando de mi", duration: "2:40", feat: "", link: "PauloLondra/siganhablandodemi.mp3" }
        ]
      },
      {
        id: 6,
        artist: "Nicki Nicole",
        title: "Recuerdos",
        year: 2019,
        image: "../../assets/albumCover/recuerdos.jpg",
        canciones: [ 
          { name: "7 Lunas", duration: "3:27", feat: "", link: "NickiNicole/7lunas.mp3" }, 
          { name: "Cómo Dímelo", duration: "3:20", feat: ", Cazzu", link: "NickiNicole/comodimelo.mp3" },
          { name: "Nos Encontramos", duration: "2:37", feat: "", link: "NickiNicole/nosencontramos.mp3" },
          { name: "Tras Vos", duration: "2:50", feat: "", link: "NickiNicole/trasvos.mp3" },
          { name: "Diva", duration: "3:20", feat: "", link: "NickiNicole/diva.mp3" },
          { name: "Shorty", duration: "3:25", feat: ", Duki", link: "NickiNicole/shorty.mp3" },
          { name: "Recuerdos", duration: "2:50", feat: "", link: "NickiNicole/recuerdos.mp3" },
          { name: "Me Gusta", duration: "3:08", feat: "", link: "NickiNicole/megusta.mp3" },
          { name: "Plegarias", duration: "3:18", feat: "", link: "NickiNicole/plegarias.mp3" }  
        ]
      }
    ];
  sAlbum: object;
  sSong: any;
  sPlaylist: string;
  sDuration: string;
  sPlaying: boolean = false;
  sClickedSong: boolean = false;

  

  constructor() {
    /* Guardo en localStorage toda la informacion necesaria al recargar la pagina */ 
    let dataLocalStorage = JSON.parse(localStorage.getItem("data"));
    this.sArrPlaylist = (dataLocalStorage !== null ? dataLocalStorage : [] );
  }
/* Funcion que me devuelve el album concreto y lo inyecta en */
  sSetAlbum(id: number): object {
    for (let i = 0; i < this.sArrCds.length; i++) {
      if (id == this.sArrCds[i]["id"]) {
        this.sAlbum = this.sArrCds[i];
      }
    } 
    return this.sAlbum;
  }

/* Funcion que me devuelve la cancion concreta y lo inyecta en c-player para que se reproduzca */
  sSetSong(id: number, songName: string): any{
    this.sArrCds.forEach((cd) => {
      if (id == cd["id"]) {
        cd["canciones"].forEach((singleSong) => {
          if (songName == singleSong["name"]) { 
            this.sSong = singleSong;
            this.sPlaying = true;
          }
        })
      }
    })
    this.sIsPLaying();
    this.sClickedSong = true;
  }

  /* Duncion que sirve para que el boton de play pause alternen en funcion de si esta sonando o no la musica */
  sIsPLaying(): void {
    if (this.sPlaying === true) {
      console.log("hola");
      (<HTMLTextAreaElement>document.querySelectorAll(".play-button")[0]).className += " d-none";
      (<HTMLTextAreaElement>document.querySelectorAll(".pause-button")[0]).className = "player-button pause-button";
    }
  }

/* Funcion que añade un album concreto a la lista de playlists */
  sAddAlbumToPlaylists(id: number): void {
    for (let i = 0; i < this.sArrCds.length; i++) {
      if (id == this.sArrCds[i]["id"]) {
        if(this.sArrPlaylist.length === 0) {
          this.sArrPlaylist.push(this.sArrCds[i]);
          localStorage.setItem("data", JSON.stringify(this.sArrPlaylist));
        } else {
          let repeatedPlaylist = false;
          this.sArrPlaylist.forEach((playlist) => {
            if(playlist["id"] == id) {
            repeatedPlaylist = true;
            }
          })
          console.log(repeatedPlaylist)
          if (repeatedPlaylist === false) {
            this.sArrPlaylist.push(this.sArrCds[i]);
            localStorage.setItem("data", JSON.stringify(this.sArrPlaylist));
          }       
        }       
      }
    } 
  }

  /* Funcion que detecta que playlist debe ser borrado y lo elimina tanto de playlists como de localStorage */
  sDeletePlaylist(id: string): void {
    this.sArrPlaylist.forEach((playlist) => {
      if (id == playlist["id"]) {
        let index = this.sArrPlaylist.indexOf(playlist);
        this.sArrPlaylist.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(this.sArrPlaylist));
      }
    })
  }

  
  

  

}


