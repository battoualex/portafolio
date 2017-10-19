import { Component, OnInit } from '@angular/core';
import { ItemsService }  from "../../services/items.service";

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent {

  constructor ( private _ps : ItemsService ) {

  }

}
