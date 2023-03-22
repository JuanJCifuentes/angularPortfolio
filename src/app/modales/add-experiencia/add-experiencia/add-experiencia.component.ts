import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/entity/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent {

  form: FormGroup;
  sector: string= '';
  institucion: string='';
  primerDia: string='';
  ultimoDia: string='';
  descripcion: string='';

  constructor(private formBuilder: FormBuilder, private experienciaService:SExperienciaService, private router:Router) { 
    this.form= this.formBuilder.group({
      sector:['',[Validators.required]],
      institucion:['',[Validators.required]],
      primerDia:['',[Validators.required]],
      ultimoDia:[''],
      descripcion:['']
    })
  }
  
  // ngOnInit(): void {}

  get Empresa(){
    return this.form.get("institucion");
  }

  get PrimerDia(){
    return this.form.get("primerDia");
   }

   get Sector(){
    return this.form.get("sector");
   }


   onCreate(): void {
    const expe = new Experiencia(this.sector, this.institucion, this.primerDia, this.ultimoDia, this.descripcion);
    this.experienciaService.save(expe).subscribe(data => {
      alert("Experiencia añadida")
      this.router.navigate(['']);
    });
    alert("Experiencia añadida")
      this.router.navigate(['']);
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      this.onCreate();
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      alert("falló la carga de datos, intente nuevamente");
      this.form.markAllAsTouched(); 
    }
 
  }




}
