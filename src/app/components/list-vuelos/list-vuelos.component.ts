import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Vuelo } from '../../interfaces/vuelo';
import { VueloService } from '../../services/vuelo.service';

@Component({
  selector: 'app-list-vuelos',
  templateUrl: './list-vuelos.component.html',
  styleUrls: ['./list-vuelos.component.css']
})
export class ListVuelosComponent implements OnInit {

  listvuelos: Vuelo[] = [

    /* {ciudadorigen:'cali',ciudaddestino:'Medellin',fecha:new Date(),horasalida:1,horallegada:2,numerodevuelo:1,estado:'volando',aerolinea:'avianca'},
    {ciudadorigen:'telaviv',ciudaddestino:'bogotá',fecha:new Date(),horasalida:1,horallegada:2,numerodevuelo:1,estado:'espera',aerolinea:'telraviv'}
 */
  ]

  constructor(private _vueloService:VueloService,private toastr: ToastrService) { }

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

  eliminarVuelo(id: any){
    this._vueloService.deleteVuelo(id).subscribe(data => {
      this.getVuelos();
      this.toastr.error('El vuelo fue elminidado con Exito', 'Registro Eliminado');
    }, error => {
      console.log(error);
    })
  }

  

}
