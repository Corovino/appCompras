import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FacturasService } from '../../servicios/facturas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-factura',
  templateUrl: './edit-factura.component.html',
  styleUrls: ['./edit-factura.component.css']
})
export class EditFacturaComponent implements OnInit {

  facturaForm : FormGroup;
  factura : any;
  id : string;

  constructor(private pf :FormBuilder, private facturaService : FacturasService, private router : Router, private activateRouter : ActivatedRoute, private facForm : FormBuilder)
  {
      this.activateRouter.params.subscribe( parametros => {
            this.id = parametros['id'];
            this.facturaService.getFactura(this.id)
                .subscribe( data => {
                    console.log(data);
                    this.factura = data;
                });
        });
  }

  ngOnInit() {
      this.facturaForm = this.facForm.group({
        id_detalle :['', [Validators.required]],
        id_factura :['', [Validators.required]],
        id_producto :['', [Validators.required]],
        cantidad :['', [Validators.required]]
      });

  }


  onSubmit()
  {
        this.factura = this.saveFactura();
        this.facturaService.updateFacturas(this.factura, this.id)
            .subscribe(data => {
                  console.log(data);
            });
        this.facturaForm.reset();        
  }

  saveFactura()
  {
        const saveFactura = {
            id_detalle  : this.facturaForm.get('id_detalle').value,
            id_factura  : this.facturaForm.get('id_factura').value,
            id_producto : this.facturaForm.get('id_producto').value,
            cantidad    : this.facturaForm.get('cantidad').value
        }

        return saveFactura; 
  }

}
