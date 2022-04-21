import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVuelosComponent } from './components/list-vuelos/list-vuelos.component';
import { AgregarEditarVueloComponent } from './components/agregar-editar-vuelo/agregar-editar-vuelo.component';
import { VerVueloComponent } from './components/ver-vuelo/ver-vuelo.component';
import { LoginRegistrarComponent } from './components/login-registrar/login-registrar.component';
import { ListVuelosClienteComponent } from './components/list-vuelos-cliente/list-vuelos-cliente.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginRegistrarComponent},
  {path:'vuelos', component: ListVuelosComponent},
  {path:'vueloscliente', component: ListVuelosClienteComponent},
  {path:'agregar', component: AgregarEditarVueloComponent},
  {path:'editar/:id', component: AgregarEditarVueloComponent},
  {path:'ver/:id', component: VerVueloComponent},
  {path:'**',redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
