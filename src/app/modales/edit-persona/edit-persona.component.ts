import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SPersonaService } from 'src/app/servicios/s-persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  form: FormGroup;
  persona: any;

  constructor(private formBuilder: FormBuilder, private personaService: SPersonaService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      titulo: [''],
      imagenPerfil: ['', [Validators.required]],
      imagenBanner: [''],
      sobreMi: [''],
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.getById(id).subscribe(data => {
      this.persona = data;
      console.log(data)
    }, err => {
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Url() {
    return this.form.get("imagenPerfil");
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get Apellido() {
    return this.form.get("apellido");
  }

  get UrlValid() {
    return this.Url?.touched && !this.Url?.valid;
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


  onUpdate(): void {
    this.personaService.update(this.form.value).subscribe(data => {
      // alert("Experiencia modificada.");
      // console.log(this.form.value);
      // this.router.navigate(['']);
    }
    )
    alert("Perfil modificado");
    this.router.navigate(['']);
  }


  onEnviar(event: Event) {
    event.preventDefault;

    if (this.form.valid) {
      this.onUpdate();
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template 
      alert("No se pudo modificar, verifique los datos")
      this.form.markAllAsTouched();
    }
  }


}
