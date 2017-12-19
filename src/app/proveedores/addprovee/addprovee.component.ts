import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService } from '../../servicios/proveedores.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
  
})
export class AddproveeComponent implements OnInit {

  @ViewChild('formpro') public form;
  private proveedorForm : FormGroup;
  private proveedor : any;
  private provincias  = [
   'Cundinamarca', 'Tolima','Cartagena','Choco','Medellin' 
  ];

  constructor(private pf :FormBuilder, private presupuestoService : ProveedoresService)  
  {
     this.proveedorForm = this.pf.group({
       nombre : ['',[Validators.required]],
       cif : ['',[Validators.required]],
       direccion : ['',[Validators.required]],
       cp : ['',[Validators.required]],
       localidad : ['',[Validators.required]],
       provincia : ['',[Validators.required]],
       telefono : ['',[Validators.required]],
       email : ['',[Validators.required]],
       contacto : ['',[Validators.required]]
     });
  }

  ngOnInit() {
  }

  onSubmit()
  {
     
     this.proveedor = this.saveProveedor();
     this.presupuestoService.postProveedores(this.proveedor)
        .subscribe( newpres => {
            console.log(newpres);
        });
    this.proveedorForm.reset(); 
     
  }

  saveProveedor(){
    const saveProveedor = {
        nombre: this.proveedorForm.get('nombre').value,
        cif: this.proveedorForm.get('cif').value,
        direccion: this.proveedorForm.get('direccion').value,
        cp: this.proveedorForm.get('cp').value,
        localidad: this.proveedorForm.get('localidad').value,
        provincia: this.proveedorForm.get('provincia').value,
        telefono: this.proveedorForm.get('telefono').value,
        email: this.proveedorForm.get('email').value,
        contacto: this.proveedorForm.get('contacto').value
    }
    return saveProveedor;  
  }

}
