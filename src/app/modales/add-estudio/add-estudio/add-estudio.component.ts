import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SEducacionService } from 'src/app/servicios/seducacion.service';
import { Educacion } from 'src/app/entity/educacion';

@Component({
  selector: 'app-add-estudio',
  templateUrl: './add-estudio.component.html',
  styleUrls: ['./add-estudio.component.css']
})
export class AddEstudioComponent {

  form: FormGroup;
  title: string = '';
  institucion: string = '';
  primerDia: string = '';
  ultimoDia: string = '';
  descripcion: string = '';

  constructor(private formBuilder: FormBuilder, private educacionService: SEducacionService, private router: Router) {
    this.form = this.formBuilder.group({

      title: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      primerDia: ['', [Validators.required]],
      ultimoDia: [''],
      descripcion: [''],
    })
  }

  // ngOnInit(): void {}

  get Title() {
    return this.form.get("title");
  }

  get PrimerDia() {
    return this.form.get("primerDia");
  }

  get Institucion() {
    return this.form.get("institucion");
  }


  onCreate(): void {
    const expe = new Educacion(this.title, this.institucion, this.primerDia, this.ultimoDia, this.descripcion);
    this.educacionService.save(expe).subscribe(data => {
      alert("Nuevo estudio añadido")
      this.router.navigate(['']);
    });
    alert("Nuevo estudio añadido")
    this.router.navigate(['']);
  }

  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;

    if (this.form.valid) {
      this.onCreate();
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      alert("falló la carga de datos, verifiquelos e intente nuevamente");
      this.form.markAllAsTouched();
    }

  }




}

