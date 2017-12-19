import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AddfraComponent } from './facturas/addfra/addfra.component';
import { FacturasService } from './servicios/facturas.service';
import { ListFacturasComponent } from './facturas/list-facturas/list-facturas.component';
import { EditFacturaComponent } from './facturas/edit-factura/edit-factura.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    AddfraComponent,
    ListFacturasComponent,
    EditFacturaComponent
    
  ],
  providers : [ FacturasService ]
})
export class FacturasModule { }
