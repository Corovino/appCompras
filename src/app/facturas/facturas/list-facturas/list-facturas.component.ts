import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../servicios/facturas.service';

@Component({
  selector: 'app-list-facturas',
  templateUrl: './list-facturas.component.html',
  styleUrls: ['./list-facturas.component.css']
})
export class ListFacturasComponent implements OnInit {

   facturas : any = [];
  constructor(private facturaService : FacturasService) { }

  ngOnInit() {
    this.listFacturas();
  }


  listFacturas()
  {
      this.facturaService.getFacturas()
          .subscribe( facturas => {
              
              for(const id$ in facturas){
                const p = facturas[id$];
                p.id$ =id$;
                console.log(p);
                this.facturas.push(facturas[id$]);
              }
      });    
  }
}
