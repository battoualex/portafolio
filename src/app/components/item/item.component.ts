import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { ItemsService }  from "../../services/items.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

  producto : any = undefined;
  cod : string = undefined;

  constructor( private route : ActivatedRoute, private _ps : ItemsService ) {
    route.params.subscribe(parametros => {
      _ps.getProducto(parametros['id']).subscribe( resp => {
        this.cod = parametros['id'];
        this.producto = resp.json();
      });
    });
  }


}
