import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SEducacionService } from 'src/app/servicios/seducacion.service';

@Component({
  selector: 'app-modal-estudios',
  templateUrl: './modal-estudios.component.html',
  styleUrls: ['./modal-estudios.component.css']
})
export class ModalEstudiosComponent implements OnInit {

  form: FormGroup;
  estudio: any; // le puse any porque sino tiraba error

  constructor(private formBuilder: FormBuilder, private estudioService: SEducacionService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      primerDia: ['', [Validators.required]],
      ultimoDia: [''],
      descripcion: ['']
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.estudioService.getById(id).subscribe(data => {
      this.estudio = data;
      console.log(data)
    }, err => {
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Title() {
    return this.form.get("title");
  }

  get PrimerDia() {
    return this.form.get("primerDia");
  }

  get Institucion() {
    return this.form.get("institucion");
  }


  onUpdate(): void {
    this.estudioService.update(this.form.value).subscribe(data => {
      // alert("Experiencia modificada.");
      // console.log(this.form.value);
      // this.router.navigate(['']);
    }
    )
    alert("Estudio modificado.");
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