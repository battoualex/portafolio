import { Injectable } from '@angular/core';
import { Http }  from "@angular/http";

@Injectable()
export class ItemsService {

  items : any[] = [];
  filtro : any[] = [];
  loadItems : boolean = true;

  constructor( private http : Http )
  {
    this.getProductos();
  }

  public searchProducto( key :  string )
  {
    if (this.items.length === 0) {
      this.getProductos().then( () => {
        this.filtrarProducto(key);
      });
    }
    else {
      this.filtrarProducto(key);
    }
  }

  private filtrarProducto( key : string ) {
    this.filtro = [];
    key = key.toLowerCase();
    this.items.forEach( producto => {
      if ( producto.categoria.indexOf( key ) >= 0 || producto.titulo.toLowerCase().indexOf( key ) >= 0 ) {
        this.filtro.push( producto );
      }
    });
  }

  public getProductos()
  {
    if (this.items.length === 0)
    {
      this.loadItems = true;
      let promesa = new Promise ( (resolve, reject ) => {
        this.http.get('https://paginaweb-b68ab.firebaseio.com/productos_idx.json').subscribe( resp => {
          setTimeout( () => {
            this.loadItems = false;
            this.items = resp.json();
            resolve();
          }, 1500);
        });
      });

      return promesa;
    }
  }

  public getProducto(cod : string)
  {
    return this.http.get(`https://paginaweb-b68ab.firebaseio.com/productos/${ cod }.json`);
  }

}
