import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Persona } from 'src/app/entity/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SPersonaService } from 'src/app/servicios/s-persona.service';

@Component({
  selector: 'app-seccion-hero',
  templateUrl: './seccion-hero.component.html',
  styleUrls: ['./seccion-hero.component.css']
})
export class SeccionHeroComponent implements OnInit {

  // name: string = '';
  // lastName: string = '';
  // title: string= '';
  // imgPerfil: any;
  // imgBanner:any;
  // imgBanner2:any;
  // constructor(private datos:PortfolioService) { }


  // ngOnInit(): void {
  //   this.datos.obtenerDatos().subscribe(data => {
  //     this.name=data.nombre;
  //     this.lastName=data.apellido;
  //     this.title=data.titulo;
  //     this.imgPerfil=data.imagenPerfil;
  //     this.imgBanner=data.imagenBanner;
  //     this.imgBanner2=data.imagenBanner2;
  //   })
  // }

  persona: Persona[] = [];
  modoEdit: any;

  constructor(public personaService: SPersonaService) { }

  ngOnInit(): void {
    this.personaService.list().subscribe(data => { this.persona = data });

    if (sessionStorage.getItem('currentUser') == "null") {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }


}
