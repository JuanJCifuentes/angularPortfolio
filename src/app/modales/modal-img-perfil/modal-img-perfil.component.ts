import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-img-perfil',
  templateUrl: './modal-img-perfil.component.html',
  styleUrls: ['./modal-img-perfil.component.css']
})
export class ModalImgPerfilComponent implements OnInit {

  form: FormGroup;
  url: string = '';
  
  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      url:['',[Validators.required]],
    })
   }

  ngOnInit() {}

  get Url(){
    return this.form.get("url");
  }
 
  get UrlValid(){
    return this.Url?.touched && !this.Url?.valid;
  }


  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
      alert("Por favor, intente de nuevo con datos validos.")
    }
 
  }


}
