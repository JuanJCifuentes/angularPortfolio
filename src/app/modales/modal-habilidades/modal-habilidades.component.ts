import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SHabilidadService } from 'src/app/servicios/shabilidad.service';

@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent implements OnInit {

  form: FormGroup;
  habilidad: any; //any pq sino tira error

  constructor(private formBuilder: FormBuilder, private habilidadService: SHabilidadService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group({
      id: [''],
      habilidad: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadService.getById(id).subscribe(data => {
      this.habilidad = data;
      console.log(data)
    }, err => {
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
  }

  get Habilidad() {
    return this.form.get("habilidad");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
   }



  onUpdate(): void {
    this.habilidadService.update(this.form.value).subscribe(data => {
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
