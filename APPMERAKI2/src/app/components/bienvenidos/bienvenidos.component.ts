import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.css']
})
export class BienvenidosComponent implements OnInit {
  private user;
  private loggedIn:boolean;
  constructor(public auth:AuthService) { }

  ngOnInit() {
    /* this.auth.authState.subscribe((user)) */
  }

}
