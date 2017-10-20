import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ItemsService }  from "../../services/items.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  key : string = undefined;

  constructor( private route : ActivatedRoute, public _ps : ItemsService ) {
    route.params.subscribe( parametros => {
      this.key = parametros['key'];

      _ps.searchProducto( this.key ) ;
    });
  }

}
