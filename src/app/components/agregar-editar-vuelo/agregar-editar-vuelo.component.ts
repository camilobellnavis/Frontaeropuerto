import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Vuelo } from '../../interfaces/vuelo';
import { VueloService } from '../../services/vuelo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-editar-vuelo',
  templateUrl: './agregar-editar-vuelo.component.html',
  styleUrls: ['./agregar-editar-vuelo.component.css']
})
export class AgregarEditarVueloComponent implements OnInit {
  agregarvuelo: FormGroup;
  accion = 'PROGRAMAR';
  id=0;
  vuelo: Vuelo | undefined;

  constructor(private fb:FormBuilder,
    private _vueloService:VueloService, 
    private router:Router,
    private aRoute:ActivatedRoute,
    private toastr: ToastrService) { 

    this.agregarvuelo= this.fb.group({
      ciudadorigen:['',Validators.required],
      ciudaddestino:['',Validators.required],
      fecha:['',Validators.required],
      horasalida:['',Validators.required],
      horallegada:['',Validators.required],
      numerodevuelo:['',Validators.required],
      aerolinea:['',Validators.required],
      estado:['',Validators.required],
    })
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEdit()
  }

  esEdit(){
    if(this.id !== 0){
      this.accion='EDITAR';
      this._vueloService.getVuelo(this.id).subscribe(data =>{
        this.vuelo=data;
        this.agregarvuelo.patchValue({
          ciudadorigen: data.ciudadorigen,
          ciudaddestino: data.ciudaddestino,
          fecha: data.fecha,
          horasalida: data.horasalida,
          horallegada: data.horallegada,
          numerodevuelo: data.numerodevuelo,
          aerolinea:data.aerolinea,
          estado: data.estado
        })
      },error =>{
        console.log(error);
      });
      
    }
  }

  

  programarEditar(){

    if(this.vuelo ==undefined){

      //Agregamos un nuevo viaje
      const vuelo: Vuelo = {
        ciudadorigen: this.agregarvuelo.get('ciudadorigen')?.value,
        ciudaddestino: this.agregarvuelo.get('ciudaddestino')?.value,
        fecha: this.agregarvuelo.get('fecha')?.value,
        horasalida: this.agregarvuelo.get('horasalida')?.value,
        horallegada: this.agregarvuelo.get('horallegada')?.value,
        numerodevuelo: this.agregarvuelo.get('numerodevuelo')?.value,
        aerolinea: this.agregarvuelo.get('aerolinea')?.value,
        estado: this.agregarvuelo.get('estado')?.value,
      }
  
      this._vueloService.saveVuelo(vuelo).subscribe(data =>{
      this.router.navigate(['/vuelos']);
      this.toastr.success('El vuelo se guardó con Exito', 'Registro Guardado');
      },error =>{
        this.toastr.error('No se pudo guardar', 'Error');
        console.log(error);
      })
    }
    else{
      //Editamos el vuelo 
      const vuelo: Vuelo = {
        id:this.vuelo.id,
        ciudadorigen: this.agregarvuelo.get('ciudadorigen')?.value,
        ciudaddestino: this.agregarvuelo.get('ciudaddestino')?.value,
        fecha: this.agregarvuelo.get('fecha')?.value,
        horasalida: this.agregarvuelo.get('horasalida')?.value,
        horallegada: this.agregarvuelo.get('horallegada')?.value,
        numerodevuelo: this.agregarvuelo.get('numerodevuelo')?.value,
        aerolinea: this.agregarvuelo.get('aerolinea')?.value,
        estado: this.agregarvuelo.get('estado')?.value,
      }

      this._vueloService.updateVuelo(this.id,vuelo).subscribe(data =>{
        this.toastr.success('El vuelo se actualizó con Exito', 'Registro Actualizado');
        this.router.navigate(['/vuelos']);
      },error =>{
        this.toastr.error('No se pudo actualizar', 'Error');
        console.log(error);
        
      })
    }

  }
}
