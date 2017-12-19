import { Component, OnInit } from '@angular/core';
import { PresupuestosService} from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css'],
  providers :[PresupuestosService]
})
export class PresupuestosComponent implements OnInit {
  presupuestos : any = [];
  constructor(private presupuestosService : PresupuestosService )
  {
        this.listPresupuestos();
  }

  ngOnInit() {
  }

  eliminarPresupuesto( id$ : string )
  {
      this.presupuestosService.delPresupuesto(id$)
          .subscribe( data => {
             this.presupuestos = [];
             this.listPresupuestos();
          });
  }

  listPresupuestos()
  {
      this.presupuestosService.getPresupuestos()
      .subscribe( presupuestos =>{
        for(const id$ in presupuestos){
            const p = presupuestos[id$];
            p.id$ =id$;
            this.presupuestos.push(presupuestos[id$]);
        }
      }); 
  }

}
