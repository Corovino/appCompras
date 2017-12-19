import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class ProveedoresService {

  prosUrl = "https://comprasapp-4496f.firebaseio.com/proveedores.json";
  proUrl  = "https://comprasapp-4496f.firebaseio.com/proveedores"; 
  constructor(private http : Http) { }


  postProveedores(proveedores : any){
    console.log(proveedores);
    console.log(this.prosUrl);
    const newpres = JSON.stringify(proveedores);
    const headers = new Headers({
      "Content-Type": "application/json"
    });

    return this.http.post(this.prosUrl, newpres, {headers})
      .map( res => {
          console.log(res.json());
          return res.json();
      });

  }

  getProevedores()
  {
     return this.http.get(this.prosUrl)
       .map( 
         res => res.json() );
  }

  getProveedor(id$: string)
  {
    const url = `${this.proUrl}/${id$}.json`;
    return this.http.get(url)
        .map( resp => resp.json());

  }


  putPrroveedor(presupuesto : any, id$ : string)
  {
      const newpre = JSON.stringify(presupuesto);
      const headers = new Headers({
        'Content-Type': 'application/json'
      });

      const url =  `${this.proUrl}/${id$}.json`;
      return this.http.put( url, newpre, {headers})
        .map( resp => {
            console.log(resp.json());
            return resp.json();
        });
  }

  delPresupuesto( id$ : string)
  {
      const url = `${this.proUrl}/${id$}.json`;
      return this.http.delete( url )
        .map( resp => resp.json()  );
  }

}
