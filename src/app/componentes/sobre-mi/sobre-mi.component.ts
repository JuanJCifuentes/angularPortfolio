import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  name: string = '';
  lastName: string = '';
  aboutMe: string = '';
  constructor(private datos:PortfolioService) { }


  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.name=data.nombre;
      this.lastName=data.apellido;
      this.aboutMe=data.sobreMi;
    })
  }

}
