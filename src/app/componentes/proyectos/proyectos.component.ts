import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Persona } from 'src/app/entity/persona';
import { Proyecto } from 'src/app/entity/proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SPersonaService } from 'src/app/servicios/s-persona.service';
import { SProyectoService } from 'src/app/servicios/sproyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  // proyecto:any;
  // constructor(private datos:PortfolioService) { }


  // ngOnInit(): void {
  //   this.datos.obtenerDatos().subscribe(data => {
  //     this.proyecto=data.proyectos;
  //   })
  // }

  proyecto: Proyecto[] = [];
  persona: Persona[] = [];
  modoEdit: any;

  constructor(public proyectoService: SProyectoService, private personaService: SPersonaService) { }

  ngOnInit(): void {
    this.proyectoService.list().subscribe(data => { this.proyecto = data; });
    this.personaService.list().subscribe(data => { this.persona = data });

    if (sessionStorage.getItem('currentUser') == "null") {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  eliminarProyecto(id?: any) {
    if (confirm('¿Seguro desea eliminar este apartado?')) {
      if (id != undefined) {
        this.proyectoService.delete(id).subscribe(
          data => {
            this.ngOnInit();
          });
        alert("Su Proyecto fue eliminado correctamente");
      } window.location.reload();
    }
  }



}
