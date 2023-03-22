import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/entity/proyecto';
import { SProyectoService } from 'src/app/servicios/sproyecto.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent{

  form: FormGroup;
  nombreProyecto: string='';
  diaRealizado: string='';
  imagenProyecto: string='';
  urlLive: string='';
  urlGithub: string='';

  constructor(private formBuilder: FormBuilder, private proyectoService: SProyectoService, private router: Router) {
    this.form = this.formBuilder.group({

      nombreProyecto: ['', [Validators.required]],
      diaRealizado: [''],
      imagenProyecto: ['', [Validators.required]],
      urlLive: [''],
      urlGithub: ['', [Validators.required]],
    })
  }

  // ngOnInit(): void {}

  get NombreProyecto() {
    return this.form.get("nombreProyecto");
  }

  get ImagenProyecto() {
    return this.form.get("imagenProyecto");
  }

  get UrlGithub() {
    return this.form.get("urlGithub");
  }



  onCreate(): void {
    const expe = new Proyecto (this.nombreProyecto, this.diaRealizado, this.imagenProyecto, this.urlLive, this.urlGithub);
    this.proyectoService.save(expe).subscribe(data => {
      alert("Nueva informacion añadida")
      this.router.navigate(['']);
    });
    alert("Nueva informacion añadida")
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
