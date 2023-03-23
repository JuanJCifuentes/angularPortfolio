import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { OnInit } from '@angular/core';
import { SPersonaService } from 'src/app/servicios/s-persona.service';
import { Persona } from 'src/app/entity/persona';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  persona: Persona[] = [];
  modoEdit: Boolean = false

  // navbar:any;
  constructor(private datos:PortfolioService, private personaService: SPersonaService) { }

  // ngOnInit(): void {
  //   this.datos.obtenerDatos().subscribe(data => {
  //     console.log('prueba onInit');
  //     this.navbar=data;
  //   })
  // }

  ngOnInit(): void {

  this.personaService.list().subscribe(data =>{
    this.persona = data
  });
  
  if (sessionStorage.getItem('currentUser') == "null"){
    //console.log("no se puede entrar");
    this.modoEdit = false;
  }else if (sessionStorage.getItem('currentUser') == null){
    //console.log("no se puede entrar, no existe el usuario");
    this.modoEdit = false;
  }else {
    //console.log("Login con éxito!");
    this.modoEdit = true;
  }
  
  }

  cerrarSesion(){
    sessionStorage.setItem('currentUser', "null");
    this.modoEdit = false;
    alert("Su sesion ha sido cerrada");
    window.location.reload();
    return this.modoEdit;
  }

}
