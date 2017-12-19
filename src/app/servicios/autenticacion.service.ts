import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AutenticacionService {

  constructor(private activateRouter : ActivatedRoute, private router :Router ) { }

  registroUsuario(userdata)
  {
      firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
          .catch( error => {
             console.log(error);
          });
  }

  inicioSesion(userdata)
  {
    firebase.auth().signInWithEmailAndPassword(userdata.email,userdata.password)
        .then( resp => {
          console.log(resp);
          this.router.navigate(['/inicio']);
        }).catch( error => {
           console.log(error);
        })
  }

  isAuthenticated()
  {
     const user = firebase.auth().currentUser;
     
     if(user)
      {
        return true;
      }
      return false;
  }
   
  logout() 
  {
     firebase.auth().signOut();
  }
}
