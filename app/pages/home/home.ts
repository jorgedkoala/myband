import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {EventosPage} from '../eventos/eventos';


import {TranslatePipe} from 'ng2-translate';


@Component({
  templateUrl: 'build/pages/home/home.html',
  pipes: [TranslatePipe]
})
export class HomePage {
  public nombre: string;
  public instrumento: string;
  
  
  constructor(public navCtrl: NavController, menu: MenuController) {
    menu.enable(true);
    //alert (localStorage["uuid"]);
    
  }


}
