import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../../interfaces/vuelo';
import { VueloService } from '../../services/vuelo.service';

@Component({
  selector: 'app-list-vuelos-cliente',
  templateUrl: './list-vuelos-cliente.component.html',
  styleUrls: ['./list-vuelos-cliente.component.css']
})
export class ListVuelosClienteComponent implements OnInit {
  listvuelos: Vuelo[] = [

    /* {ciudadorigen:'cali',ciudaddestino:'Medellin',fecha:new Date(),horasalida:1,horallegada:2,numerodevuelo:1,estado:'volando',aerolinea:'avianca'},
    {ciudadorigen:'telaviv',ciudaddestino:'bogotá',fecha:new Date(),horasalida:1,horallegada:2,numerodevuelo:1,estado:'espera',aerolinea:'telraviv'}
 */
  ]
  constructor(private _vueloService:VueloService) { }

  ngOnInit(): void {
    this.getVuelos();
  }

  getVuelos(){

    this._vueloService.getListVuelos().subscribe(data => {
      this.listvuelos= data;
    }, error => {
      console.log(error);
    });
  }

}
