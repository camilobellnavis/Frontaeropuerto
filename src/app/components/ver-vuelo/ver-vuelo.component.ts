import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VueloService } from '../../services/vuelo.service';

@Component({
  selector: 'app-ver-vuelo',
  templateUrl: './ver-vuelo.component.html',
  styleUrls: ['./ver-vuelo.component.css']
})
export class VerVueloComponent implements OnInit {
  id: number;
  vuelo: any;
  constructor(private aRoute:ActivatedRoute, private _vueloService:VueloService) {
    this.aRoute.snapshot.paramMap.get('id');
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
    //console.log(this.aRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.getVuelo();
  }

  getVuelo(){
    this._vueloService.getVuelo(this.id).subscribe(data =>{
    this.vuelo = data;
    })
  }

}
