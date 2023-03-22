import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Desarrollo } from 'src/app/entity/desarrollo';
import { SDesarrolloService } from 'src/app/servicios/sdesarrollo.service';

@Component({
  selector: 'app-add-desarrollo',
  templateUrl: './add-desarrollo.component.html',
  styleUrls: ['./add-desarrollo.component.css']
})
export class AddDesarrolloComponent {

  form: FormGroup;
  sector: string='';
  lenguaje: string='';
  diaAprendido: string='';

  constructor(private formBuilder: FormBuilder, private desarrolloService: SDesarrolloService, private router: Router) {
    this.form = this.formBuilder.group({

      sector: ['', [Validators.required]],
      lenguaje: ['', [Validators.required]],
      diaAprendido: [''],
    })
  }

  // ngOnInit(): void {}

  get Sector() {
    return this.form.get("sector");
  }

  get Lenguaje() {
    return this.form.get("lenguaje");
  }



  onCreate(): void {
    const expe = new Desarrollo(this.sector, this.lenguaje, this.diaAprendido);
    this.desarrolloService.save(expe).subscribe(data => {
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


