import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';

import { FacturasModule } from './facturas/facturas.module';
import { AddfraComponent } from './facturas/facturas/addfra/addfra.component';
import { ListFacturasComponent } from './facturas/facturas/list-facturas/list-facturas.component';
import { EditFacturaComponent } from './facturas/facturas/edit-factura/edit-factura.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes = [
  { path : '', component: InicioComponent },
  { path : 'proveedores', component: ProveedoresComponent, canActivate:[GuardService] },
  { path : 'addProveedor', component: AddproveeComponent, canActivate:[GuardService]},
  { path : 'presupuestos', component: PresupuestosComponent, canActivate:[GuardService]},
  { path : 'editpres/:id', component: EditpresComponent, canActivate:[GuardService] },
  { path : 'addfactura', component: AddfraComponent, canActivate:[GuardService] },
  { path : 'facturas', component: ListFacturasComponent, canActivate:[GuardService] },
  { path : 'editfactura/:id', component: EditFacturaComponent, canActivate:[GuardService] },
  { path : 'addpres', component: AddpresComponent, canActivate:[GuardService] },
  { path : 'registro', component: RegistroComponent },
  { path : 'inises', component: InisesComponent },
  { path : '**', component: InicioComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FacturasModule
  ],
  providers: [ ProveedoresService, PresupuestosService, AutenticacionService, GuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
