import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/entity/habilidad';
import { SHabilidadService } from 'src/app/servicios/shabilidad.service';

@Component({
  selector: 'app-add-habilidad',
  templateUrl: './add-habilidad.component.html',
  styleUrls: ['./add-habilidad.component.css']
})
export class AddHabilidadComponent {

  form: FormGroup;
  habilidad: string='';
  porcentaje: string='';
  rango: any;

  constructor(private formBuilder: FormBuilder, private habilidadService: SHabilidadService, private router: Router) {
    this.form = this.formBuilder.group({

      habilidad: ['', [Validators.required]],
      rango: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }

  // ngOnInit(): void {}

  get Habilidad() {
    return this.form.get("habilidad");
  }

  get Rango(){
    return this.form.get("rango");
   }



  onCreate(): void {
    const hab = new Habilidad (this.habilidad, this.porcentaje);
    this.habilidadService.save(hab).subscribe(data => {
      alert("Nueva habilidad añadida")
      this.router.navigate(['']);
    });
    alert("Nueva habilidad añadida")
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
