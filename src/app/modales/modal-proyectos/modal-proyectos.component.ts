import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SProyectoService } from 'src/app/servicios/sproyecto.service';

@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit {

  form: FormGroup;
  proyecto: any; //any pq sino tira error

  constructor(private formBuilder: FormBuilder, private proyectoService: SProyectoService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group({
      id: [''],
      nombreProyecto: ['', [Validators.required]],
      diaRealizado: [''],
      imagenProyecto: ['', [Validators.required]],
      urlLive: [''],
      urlGithub: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.getById(id).subscribe(data => {
      this.proyecto = data;
      console.log(data)
    }, err => {
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get NombreProyecto() {
    return this.form.get("nombreProyecto");
  }

  get ImagenProyecto() {
    return this.form.get("imagenProyecto");
  }

  get UrlGithub() {
    return this.form.get("urlGithub");
  }



  onUpdate(): void {
    this.proyectoService.update(this.form.value).subscribe(data => {
      // alert("Experiencia modificada.");
      // console.log(this.form.value);
      // this.router.navigate(['']);
    }
    )
    alert("Informacion modificada.");
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

