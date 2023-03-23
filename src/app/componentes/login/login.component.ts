import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/entity/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email = '';
  password = '';
  persona: Persona = new Persona ("", "", "", "", "", "", "", "");

  constructor(private ruta: Router, private formBuilder: FormBuilder, private autService:AutenticacionService) {
    this.form=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
    })
   }

   ngOnInit(): void {
    sessionStorage.setItem('currentUser', 'null'); // pongo null como string '' para q compile
  }

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  // onEnviar(event: Event){
  //   // Detenemos la propagación o ejecución del compotamiento submit de un form
  //   event.preventDefault; 
 
  //   if (this.form.valid){
  //     // Llamamos a nuestro servicio para enviar los datos al servidor
  //     // También podríamos ejecutar alguna lógica extra
  //     alert("Todo salio bien ¡Enviar formuario!")
  //   }else{
  //     // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
  //     this.form.markAllAsTouched(); 
  //   }
 
  // }

  onEnviar(event: Event){

    event.preventDefault; 
 
    if (this.form.valid){
      //console.log(JSON.stringify(this.form.value));
      this.autService.loginPersona(this.form.value).subscribe(data=> {
          //console.log("DATA: " + JSON.stringify(data.id));
          if (data){
            alert("Acceso correcto, sesion iniciada.");
            this.ruta.navigate(['']);
          } else {
            alert("Acceso incorrecto, verifique email y contraseña");
          }
          
          
        }, error => {
          //this.ruta.navigate(['login'])
          alert("error al iniciar sesion")
        })
        
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      sessionStorage.setItem('currentUser', 'null'); //cambie el null a string para que compile--> 'null'
      alert("Hay un error en el formulario")
      this.form.markAllAsTouched();
    }
 
  }

}
