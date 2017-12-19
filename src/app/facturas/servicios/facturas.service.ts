import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class FacturasService {

  factUrl = "https://comprasapp-4496f.firebaseio.com/facturas.json";
  facUrl  = "https://comprasapp-4496f.firebaseio.com/facturas"; 

  constructor(private http : Http) { }

  getFacturas()
  {
       return this.http.get(this.factUrl)
              .map( res => res.json() );
  }

  getFactura(id$ :string)
  {
      const url = `${this.facUrl}/${id$}.json`;
      return this.http.get(url)
            .map( res => res.json()); 
  }

  postFactura(factura :any)
  {
    const newfact = JSON.stringify(factura);
    const headers = new Headers({
      "Content-Type": "application/json"
    });

    return this.http.post(this.factUrl, newfact, {headers})
          .map( res => {
                  console.log(res.json());
                  res.json();
          });


  }

  updateFacturas(factura :any, id$ :string )
  {
        const updateFac = JSON.stringify(factura);
        const headers   =  new Headers({

        });

        const url = `${this.facUrl}/${id$}.json`;
        return this.http.put( url, updateFac, {headers} )
              .map( resp => {
                    console.log(resp.json());
                    resp.json();
              });
  }

  deleteFactura(id$ : string){

        const url = `${this.facUrl}/${id$}.json`;
        return this.http.delete(url)
              .map( res => res.json());
  }

}
