import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PresupuestosService {

  presUrl = "https://comprasapp-4496f.firebaseio.com/presupuestos.json";
  preUrl  = "https://comprasapp-4496f.firebaseio.com/presupuestos"; 
  constructor(private http : Http) { }


  postPresupuesto(presupuesto : any){
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      "Content-Type": "application/json"
    });

    return this.http.post(this.presUrl, newpres, {headers})
      .map( res => {
          console.log(res.json());
          return res.json();
      });

  }

  getPresupuestos()
  {
     return this.http.get(this.presUrl)
       .map( 
         res => res.json() );
  }

  getPresupuesto(id$: string)
  {
    const url = `${this.preUrl}/${id$}.json`;
    return this.http.get(url)
        .map( resp => resp.json());

  }


  putPresupuesto(presupuesto : any, id$ : string)
  {
      const newpre = JSON.stringify(presupuesto);
      const headers = new Headers({
        'Content-Type': 'application/json'
      });

      const url =  `${this.preUrl}/${id$}.json`;
      return this.http.put( url, newpre, {headers})
        .map( resp => {
            console.log(resp.json());
            return resp.json();
        });
  }

  delPresupuesto( id$ : string)
  {
      const url = `${this.preUrl}/${id$}.json`;
      return this.http.delete( url )
        .map( resp => resp.json()  );
  }
}
