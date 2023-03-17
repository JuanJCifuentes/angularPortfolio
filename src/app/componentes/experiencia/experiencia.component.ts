import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entity/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
   desarrollo:any;
   experiencia:any;
   estudio:any;
   constructor(private datos:PortfolioService) { }

   ngOnInit(): void {
     this.datos.obtenerDatos().subscribe(data => {
       this.desarrollo=data.desarrolloweb;
       this.experiencia=data.experiencias;
       this.estudio=data.estudios;
     })
   }
  // experiencias: Experiencia[]=[]; //se llama al modelo q es un array

  // constructor(private sExperiencia: SExperienciaService) {

  // }

  // ngOnInit(): void {
  //     this.cargarExperiencia();
      
  // }

  // cargarExperiencia():void{

  //   this.sExperiencia.list().subscribe(data=>{this.experiencias=data})

  // }




}
