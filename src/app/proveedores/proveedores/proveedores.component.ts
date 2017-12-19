import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
  providers :[ProveedoresService]
})
export class ProveedoresComponent implements OnInit {

  private proveedor :any[]=[];
  private cargando = true;
  
  constructor( private proveedores : ProveedoresService) {
    setTimeout(()=>{
        this.proveedores.getProevedores()
          .subscribe( proveedores => {
            for(const id$ in proveedores){
                const p = proveedores[id$];
                p.id$ = id$;
                this.proveedor.push(proveedores[id$]);
            } 
            this.cargando = false;
        });
    },5000)
   }

  ngOnInit() {

    
  }

}
