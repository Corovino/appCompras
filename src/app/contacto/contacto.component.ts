import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public coche: Coche;
  public coches: Array<Coche>;

  constructor() {
      this.coche = new Coche(" "," "," ");
      this.coches = [
        new Coche("uno ","dos ","tres ");
        new Coche("cuatro ","con ","seis ");
      ]
  }

  ngOnInit() {
  }

  onSUbmit(){
    this.coches.push(this.coche);
    this.coche('','','');
    console.log(this.coche);
  }

}
