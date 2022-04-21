import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



import { AppComponent } from './app.component';
import { AgregarEditarVueloComponent } from './components/agregar-editar-vuelo/agregar-editar-vuelo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListVuelosComponent } from './components/list-vuelos/list-vuelos.component';
import { VerVueloComponent } from './components/ver-vuelo/ver-vuelo.component';
import { LoginRegistrarComponent } from './components/login-registrar/login-registrar.component';
import { ListVuelosClienteComponent } from './components/list-vuelos-cliente/list-vuelos-cliente.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarVueloComponent,
    NavbarComponent,
    ListVuelosComponent,
    VerVueloComponent,
    LoginRegistrarComponent,
    ListVuelosClienteComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
