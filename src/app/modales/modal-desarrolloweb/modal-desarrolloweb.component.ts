import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-desarrolloweb',
  templateUrl: './modal-desarrolloweb.component.html',
  styleUrls: ['./modal-desarrolloweb.component.css']
})
export class ModalDesarrollowebComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      sector:['', [Validators.required]],
      fecha:['',[Validators.required]],
      lenguaje:['',[Validators.required]],
    })
   }

  ngOnInit() {}


}
