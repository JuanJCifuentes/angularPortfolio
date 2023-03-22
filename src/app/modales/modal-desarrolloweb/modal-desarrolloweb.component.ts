import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SDesarrolloService } from 'src/app/servicios/sdesarrollo.service';

@Component({
  selector: 'app-modal-desarrolloweb',
  templateUrl: './modal-desarrolloweb.component.html',
  styleUrls: ['./modal-desarrolloweb.component.css']
})
export class ModalDesarrollowebComponent implements OnInit {

  form: FormGroup;
  desarrollo: any; //any pq sino tira error

  constructor(private formBuilder: FormBuilder, private desarrolloService: SDesarrolloService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group({
      id: [''],
      sector: ['', [Validators.required]],
      lenguaje: ['', [Validators.required]],
      diaAprendido: [''],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.desarrolloService.getById(id).subscribe(data => {
      this.desarrollo = data;
      console.log(data)
    }, err => {
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Sector() {
    return this.form.get("sector");
  }

  get Lenguaje() {
    return this.form.get("lenguaje");
  }



  onUpdate(): void {
    this.desarrolloService.update(this.form.value).subscribe(data => {
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
