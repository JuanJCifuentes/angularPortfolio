import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Persona } from 'src/app/entity/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SPersonaService } from 'src/app/servicios/s-persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
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
