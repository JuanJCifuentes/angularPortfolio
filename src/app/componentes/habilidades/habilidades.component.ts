import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Habilidad } from 'src/app/entity/habilidad';
import { Persona } from 'src/app/entity/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SPersonaService } from 'src/app/servicios/s-persona.service';
import { SHabilidadService } from 'src/app/servicios/shabilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidad: Habilidad[] = [];
  persona: Persona[] = [];
  modoEdit: any;

  constructor(public habilidadService: SHabilidadService, private personaService: SPersonaService) { }

  ngOnInit(): void {
    this.habilidadService.list().subscribe(data => {this.habilidad = data;});
    this.personaService.list().subscribe(data => { this.persona = data });

    if (sessionStorage.getItem('currentUser') == "null") {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  eliminarHabilidad(id?: any) {
    if (confirm('¿Seguro desea eliminar este apartado?')) {
      if (id != undefined) {
        this.habilidadService.delete(id).subscribe(
          data => {
            this.ngOnInit();
          });
        alert("Su Habilidad fue eliminada correctamente");
      } window.location.reload();
    }
  }

}
