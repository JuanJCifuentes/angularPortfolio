import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent {

  // form: FormGroup;
  // habilidad: string = '';
  // porcentaje: number = 0;

  // constructor(private formBuilder: FormBuilder, private sHabilidad: HabilidadService) {
  //   this.form = this.formBuilder.group({
  //     habilidad: ['', [Validators.required]],
  //     porcentaje: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
  //   })
  // }

  // ngOnInit() { }

  // get Habilidad() {
  //   return this.form.get("habilidad");
  // }

  // get Porcentaje() {
  //   return this.form.get("porcentaje");
  // }

  // get HabilidadValid() {
  //   return this.Habilidad?.touched && !this.Habilidad?.valid;
  // }

  // get PorcentajeValid() {
  //   return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  // }

  // onCreate() void {
  //   // Detenemos la propagación o ejecución del compotamiento submit de un form
  //   event.preventDefault;

  //   if(this.form.valid){
  //   // Llamamos a nuestro servicio para enviar los datos al servidor
  //   // También podríamos ejecutar alguna lógica extra
  //   alert("Todo salio bien ¡Enviar formuario!")
  //   }
  // }

}
