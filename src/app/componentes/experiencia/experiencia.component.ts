import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entity/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SPersonaService } from 'src/app/servicios/s-persona.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/entity/persona';
import { Educacion } from 'src/app/entity/educacion';
import { SEducacionService } from 'src/app/servicios/seducacion.service';
import { Desarrollo } from 'src/app/entity/desarrollo';
import { SDesarrolloService } from 'src/app/servicios/sdesarrollo.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //  desarrollo:any;
  //  experiencia:any;
  //  estudio:any;
  //  constructor(private datos:PortfolioService) { }

  //  ngOnInit(): void {
  //    this.datos.obtenerDatos().subscribe(data => {
  //      this.desarrollo=data.desarrolloweb;
  //      this.experiencia=data.experiencias;
  //      this.estudio=data.estudios;
  //    })
  //  }

  experiencia: Experiencia[] = [];
  estudio: Educacion[] = [];
  desarrollo: Desarrollo[] = [];
  persona: Persona[] = [];
  modoEdit: any;

  constructor(private experienciaService: SExperienciaService, private eduService: SEducacionService, private desarrolloService: SDesarrolloService, private personaService: SPersonaService, private router: Router) { }

  ngOnInit(): void {
    this.verExperiencia();
    this.eduService.list().subscribe(data => { this.estudio = data });
    this.desarrolloService.list().subscribe(data => { this.desarrollo = data });
    this.personaService.list().subscribe(data => { this.persona = data });

    if (sessionStorage.getItem('currentUser') == "null") {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  verExperiencia(): void {
    this.experienciaService.list().subscribe(
      data => {
        this.experiencia = data;
      }
    )
  }


  eliminarExperiencia(id: any): void {
    if (confirm('¿Seguro desea eliminar este apartado?')) {
      if (id != undefined) {
        this.experienciaService.delete(id).subscribe(data => {
          this.verExperiencia();
        });
        alert("Su Experiencia fue eliminada correctamente");
      } window.location.reload();
    }
  }

  eliminarEducacion(id?: any) {
    if (confirm('¿Seguro desea eliminar este apartado?')) {
      if (id != undefined) {
        this.eduService.delete(id).subscribe(
          data => {
            this.ngOnInit();
          });
        alert("Su Estudio fue eliminado correctamente");
      } window.location.reload();
    }
  }

  eliminarDesarrollo(id?: any) {
    if (confirm('¿Seguro desea eliminar este apartado?')) {
      if (id != undefined) {
        this.desarrolloService.delete(id).subscribe(
          data => {
            this.ngOnInit();
          });
        alert("Su Desarrollo fue eliminado correctamente");
      } window.location.reload();
    }
  }



}
