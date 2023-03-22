import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/entity/persona';
import { SPersonaService } from 'src/app/servicios/s-persona.service';

@Component({
  selector: 'app-modal-img-perfil',
  templateUrl: './modal-img-perfil.component.html',
  styleUrls: ['./modal-img-perfil.component.css']
})
export class ModalImgPerfilComponent implements OnInit {

  form: FormGroup;
  persona: any;

  constructor(private formBuilder: FormBuilder, private personaService: SPersonaService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group({
      id: [''],
      imagenPerfil: ['', [Validators.required]],
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

  get UrlValid() {
    return this.Url?.touched && !this.Url?.valid;
  }


  onUpdate(): void {
    this.personaService.update(this.form.value).subscribe(data => {
      // alert("Experiencia modificada.");
      // console.log(this.form.value);
      // this.router.navigate(['']);
    }
    )
    alert("Imagen modificada");
    this.router.navigate(['']);
  }


  onEnviar(event: Event) {
    event.preventDefault;

    if (this.form.valid) {
      this.onUpdate();
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template 
      alert("No se pudo modificar")
      this.form.markAllAsTouched();
    }
  }


}
