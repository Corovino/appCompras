import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FacturasService } from '../../servicios/facturas.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-addfra',
  templateUrl: './addfra.component.html',
  styleUrls: ['./addfra.component.css']
})
export class AddfraComponent implements OnInit {

  facturaForm : FormGroup;
  factura : any;

  constructor(private facturasService : FacturasService, private facForm : FormBuilder) { }

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
        this.facturasService.postFactura(this.factura)
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
