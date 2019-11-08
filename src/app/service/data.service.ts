import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sSectionTitles: string[] = ["Tu música de uso intensivo", "Vuelve a escuchar"];
  sArrPlaylist: object = {
    "playlists": [],
  };
  sArrCds: object[] = [
      {
        id: 1,
        artist: "Rels B",
        title: "Happy Birthday Flakko",
        year: 2019,
        image: "../../assets/albumCover/happybirthdayflakko.jpg",
        canciones: [ 
          { name: "Happy  Birthday Flakko", duration: "0:29",link: "RelsB/happybirthdayflakko.mp3" }, 
          { name: "¿Y tú qué?", duration: "3:06", link: "RelsB/ytuque.mp3"},
          { name: "Orgullo", duration: "3:06", link: "RelsB/orgullo.mp3" },
          { name: "Sin mirar las señales", duration: "3:01", link: "RelsB/sinmirarlasseñales.mp3" },
          { name: "¿Cómo te va, querida?", duration: "3:28", link: "RelsB/comotevaquerida.mp3" },
          { name: "La latina", duration: "3:06", link: "RelsB/lalatina.mp3"},
          { name: "Otro cheke", duration: "3:00", link: "RelsB/otrocheke.mp3"},
          { name: "Si no te veo", duration: "3:27", link: "RelsB/sinoteveo.mp3"},
          { name: "Quédate, te quiero", duration: "1:57", link: "RelsB/quedatetequiero.mp3"}
        ]
      },
      {
        id: 2,
        artist: "Natos y Waor, Recycled J",
        title: "Hijos de la Ruina, vol. 2",
        year: 2019,
        image: "../../assets/albumCover/hijosdelaruina.jpg",
        canciones: [ 
          { name: "Carretera", duration: "3:34", link: "NatosyWaor/carretera.mp3"}, 
          { name: "In love", duration: "5:28",  link: "NatosyWaor/inlove.mp3" },
          { name: "Speed", duration: "4:15", link: "NatosyWaor/speed.mp3" },
          { name: "Agua y aceite", duration: "3:50", link: "NatosyWaor/aguayaceite.mp3" },
          { name: "Carne de cañón", duration: "4:22", link: "NatosyWaor/carnedecañon.mp3" },
          { name: "J'suis HDLR", duration: "3:25", link: "NatosyWaor/jsuishdlr.mp3" }          
        ]
      },
      {
        id: 3,
        artist: "Moonkey",
        title: "Fuck the World",
        year: 2019,
        image: "../../assets/albumCover/fucktheworld.jpg",
        canciones: [ 
          { name: "Blood", duration: "3:12", link: "Moonkey/blood.mp3" }, 
          { name: "Envidia", duration: "3:12", link: "Moonkey/envidia.mp3" },
          { name: "Bad boys", duration: "2:48", link: "Moonkey/badboys.mp3" },
          { name: "El diablo me aviso", duration: "3:32", link: "Moonkey/eldiablomeaviso.mp3" },
          { name: "Happy Love", duration: "2:08", link: "Moonkey/happylove.mp3" },
          { name: "Guau guau", duration: "2:43", link: "Moonkey/guauguau.mp3" },
          { name: "Lil baby", duration: "3:02", link: "Moonkey/lilbaby.mp3" },
          { name: "A veces", duration: "2:53", link: "Moonkey/aveces.mp3" }     
        ]
      },
      {
        id: 4,
        artist: "Guitarricadelafuente",
        title: "Recopilatorio Andaluz",
        year: 2019,
        image: "../../assets/albumCover/recopilatorioandaluz.jpg",
        canciones: [ 
          { name: "ABC", duration: "2:49", link: "Guitarricadelafuente/abc.mp3" }, 
          { name: "Vas a encontrarte", duration: "3:31", link: "Guitarricadelafuente/vasaencontrarte.mp3" },
          { name: "Guantanamera", duration: "3:11", link: "Guitarricadelafuente/guantanamera.mp3" },
          { name: "Nana triste", duration: "3:07", link: "Guitarricadelafuente/nanatriste.mp3" },
          { name: "Agua y mezcal", duration: "3:32", link: "Guitarricadelafuente/aguaymezcal.mp3" },
          { name: "Nacido pa ganar", duration: "3:10", link: "Guitarricadelafuente/nacidopaganar.mp3" }    
        ]
      },
      {
        id: 5,
        artist: "Paulo Londra",
        title: "Home Run",
        year: 2019,
        image: "../../assets/albumCover/homerun.jpg",
        canciones: [ 
          { name: "Homerun (Intro)", duration: "2:29", link: "PauloLondra/.mp3" }, 
          { name: "Tal vez", duration: "4:23", link: "PauloLondra/.mp3" },
          { name: "No puedo", duration: "2:55", link: "PauloLondra/.mp3" },
          { name: "Adan y Eva", duration: "4:16", link: "PauloLondra/.mp3" },
          { name: "Demasiado loco", duration: "2:46", link: "PauloLondra/.mp3" },
          { name: "Maldita abusadora", duration: "4:10", link: "PauloLondra/.mp3" },
          { name: "Y yo no sé", duration: "3:10", link: "PauloLondra/.mp3" },    
          { name: "So fresh", duration: "2:47", link: "PauloLondra/.mp3" },
          { name: "Querido amigo", duration: "3:48", link: "PauloLondra/.mp3" },
          { name: "Romeo y Julieta", duration: "3:01", link: "PauloLondra/.mp3" },
          { name: "Por eso vine", duration: "2:58", link: "PauloLondra/.mp3" },
          { name: "Solo pienso en ti", duration: "4:28", link: "PauloLondra/.mp3" },
          { name: "Forever alone", duration: "3:34", link: "PauloLondra/.mp3" },
          { name: "Condenado para el millón", duration: "3:42", link: "PauloLondra/.mp3"},
          { name: "Nena maldición", duration: "3:47", link: "PauloLondra/.mp3" },
          { name: "Dímelo", duration: "3:32", link: "PauloLondra/.mp3" },
          { name: "Chica paranormal", duration: "3:41", link: "PauloLondra/.mp3" },
          { name: "Sigan hablando de mi", duration: "2:40", link: "PauloLondra/.mp3" }
        ]
      }
    ];
  sAlbum: object;
  sSong: string;
  

  constructor() { 
    let dataLocalStorage = JSON.parse(localStorage.getItem("data"));
    this.sArrPlaylist = (dataLocalStorage !== null ? dataLocalStorage : [] );
  }

  sSetAlbum(id: number): object {
    for (let i = 0; i < this.sArrCds.length; i++) {
      if (id == this.sArrCds[i]["id"]) {
        this.sAlbum = this.sArrCds[i];
      }
    } 
    return this.sAlbum;
  }

  sSetSong(id: number, songName: string): void{
    this.sArrCds.forEach((cd) => {
      if (id == cd["id"]) {
        cd["canciones"].forEach((singleSong) => {
          if (songName == singleSong["name"]) { 
            this.sSong = singleSong["link"];
            console.log(this.sSong)
          }
        })
      }
    })
  }

  

}


