import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info : any = {};
  equipo : any[] = [];
  paginaLoad : boolean = false;
  aboutLoad : boolean = false;

  constructor( public http : Http ) {
    this.getInfoPagina();
    this.getInfoAbout();
  }

  public getInfoPagina()
  {
    this.http.get("assets/data/info.pagina.json").subscribe( data => {
      this.paginaLoad = true;
      this.info = data.json();
    });
  }

  public getInfoAbout()
  {
    this.http.get("https://paginaweb-b68ab.firebaseio.com/equipo.json").subscribe( data => {
      this.aboutLoad = true;
      this.equipo = data.json();
    });
  }

}
