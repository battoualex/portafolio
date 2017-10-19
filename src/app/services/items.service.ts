import { Injectable } from '@angular/core';
import { Http }  from "@angular/http";

@Injectable()
export class ItemsService {

  items : any[] = [];
  loadItems : boolean = true;

  constructor( private http : Http )
  {
    this.getProductos();
  }

  public getProductos()
  {
    if (this.items.length === 0)
    {
      this.loadItems = true;
      this.http.get('https://paginaweb-b68ab.firebaseio.com/productos_idx.json').subscribe( resp => {
        console.log(resp.json());
        this.loadItems = false;
      })
    }
  }

}
