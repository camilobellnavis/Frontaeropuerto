import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login-registrar',
  templateUrl: './login-registrar.component.html',
  styleUrls: ['./login-registrar.component.css']
})
export class LoginRegistrarComponent implements OnInit {

  agregarusuario: FormGroup;
  idSeleccion=0;
  id = 0;
  usuario: any;
  res: any;
  listusuarios: Usuario[] = [

    /* {ciudadorigen:'cali',ciudaddestino:'Medellin',fecha:new Date(),horasalida:1,horallegada:2,numerodevuelo:1,estado:'volando',aerolinea:'avianca'},
    {ciudadorigen:'telaviv',ciudaddestino:'bogotá',fecha:new Date(),horasalida:1,horallegada:2,numerodevuelo:1,estado:'espera',aerolinea:'telraviv'}
 */
  ]

  constructor(private fb:FormBuilder,
    private _usuarioService:UsuarioService, 
    private _router:Router,
    private aRoute:ActivatedRoute,
    private toastr: ToastrService) { 

      this.agregarusuario= this.fb.group({
        id:['',Validators.required],
        usuario:['',Validators.required],
        contraseña:['',Validators.required],
        rol:['',Validators.required],
      })
    }

  ngOnInit(): void {
    this.esLogin()
    this.getUser()
    
  }

  capturar(){
    console.log(this.idSeleccion);
    this.agregarusuario= this.fb.group({
      id:this.idSeleccion,
      usuario:['',Validators.required],
      contraseña:['',Validators.required],
      rol:['',Validators.required],
    })
    this.id = this.idSeleccion;
    this.esLogin();
  }
  getUser(){
      console.log('camilo');
      this._usuarioService.getListUsuarios().subscribe(data => {
      this.listusuarios= data;
      //console.log(this.listusuarios);
    }, error => {
      console.log(error);
    });
  }


  esLogin(){
    console.log("Es login: "+this.id);
    if(this.id !== 0){
      
      this._usuarioService.getUsuario(this.id).subscribe(data =>{
        this.usuario=data;
        console.log(this.usuario)
      
        
      },error =>{
        console.log(error);
      });
      
    }
  }

  loginRegistrar(){
    
    console.log(this.usuario)
    if(this.usuario == undefined){

      //Registramos un User
      const usuario: Usuario = {
        id: this.agregarusuario.get('id')?.value,
        usuario: this.agregarusuario.get('usuario')?.value,
        contraseña: this.agregarusuario.get('contraseña')?.value,
        rol:this.agregarusuario.get('rol')?.value,
        
      }

      console.log(usuario);
      
      this._usuarioService.saveUsuario(usuario).subscribe(data =>{
        if(usuario.rol=='admin'){
        this.toastr.success('El usuario se guardó con Exito', 'Registro Guardado');
        this._router.navigate(['/vuelos']);
        console.log('Guardo Admin');
        }else{
        this.toastr.success('El usuario se guardó con Exito', 'Registro Guardado');
        this._router.navigate(['/vueloscliente']);
        console.log('Guardo NoAdmin');
        }
      },error =>{
        console.log(error);
      })
    
  }else{
    //Editamos el vuelo 
    //this._usuarioService.updateUser(this.id,this.usuario).subscribe(data =>{
      /* const usuarioA: Usuario = {
        id: this.agregarusuario.get('id')?.value,
        usuario: this.agregarusuario.get('usuario')?.value,
        contraseña: this.agregarusuario.get('contraseña')?.value,
        rol:this.agregarusuario.get('rol')?.value,
        
      }
      if(usuarioA.contraseña==this.usuario.contraseña){
      if(this.usuario.rol=='admin'){
      this._router.navigate(['/vuelos']);
      console.log('Actualizo Admin');
     }
      else{
      this._router.navigate(['/vueloscliente']);
      console.log('Actualizo No Admin');
      }
    } */
    /* },error =>{
      console.log(error);
      
    }) */
    this.toastr.error('El usuario ya existe', 'Error');
    console.log("Ya existe el user")
      
  }
    

  }

}
