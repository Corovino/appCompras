import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

ngOnInit()
{
    firebase.initializeApp({
       apiKey: "AIzaSyCl0HAbu80XdmOlsaGLgh1g9sLJZn33uKc",
       authDomain: "comprasapp-4496f.firebaseapp.com"
    });
}

}
