import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/entity/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {

  form: FormGroup;
  experiencia: any; // le puse any porque como Experiencia no compilaba

  constructor(private formBuilder: FormBuilder, private experienciaService: SExperienciaService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group({
      id: [''],
      sector: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      primerDia: ['', [Validators.required]],
      ultimoDia: [''],
      descripcion: ['']
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.getById(id).subscribe(data => {
      this.experiencia = data;
      console.log(data)
    }, err => {
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Empresa() {
    return this.form.get("institucion");
  }

  get PrimerDia() {
    return this.form.get("primerDia");
  }

  get Sector() {
    return this.form.get("sector");
  }


  onUpdate(): void {
    this.experienciaService.update(this.form.value).subscribe(data => {
      // alert("Experiencia modificada.");
      // console.log(this.form.value);
      // this.router.navigate(['']);
    }
    )
    alert("Experiencia modificada.");
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
