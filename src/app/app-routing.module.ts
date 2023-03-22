import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { AddDesarrolloComponent } from './modales/add-desarrollo/add-desarrollo/add-desarrollo.component';
import { AddEstudioComponent } from './modales/add-estudio/add-estudio/add-estudio.component';
import { AddExperienciaComponent } from './modales/add-experiencia/add-experiencia/add-experiencia.component';
import { AddHabilidadComponent } from './modales/add-habilidad/add-habilidad/add-habilidad.component';
import { AddProyectoComponent } from './modales/add-proyecto/add-proyecto/add-proyecto.component';
import { EditPersonaComponent } from './modales/edit-persona/edit-persona.component';
import { ModalDesarrollowebComponent } from './modales/modal-desarrolloweb/modal-desarrolloweb.component';
import { ModalEstudiosComponent } from './modales/modal-estudios/modal-estudios.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ModalHabilidadesComponent } from './modales/modal-habilidades/modal-habilidades.component';
import { ModalImgPerfilComponent } from './modales/modal-img-perfil/modal-img-perfil.component';
import { ModalProyectosComponent } from './modales/modal-proyectos/modal-proyectos.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'editpersona/:id', component:EditPersonaComponent, canActivate: [GuardGuard]},
  {path: 'editexpe/:id', component:ModalExperienciaComponent, canActivate: [GuardGuard]},
  {path: 'editestudio/:id', component:ModalEstudiosComponent, canActivate: [GuardGuard]},
  {path: 'edit-desarrollo/:id', component:ModalDesarrollowebComponent, canActivate: [GuardGuard]},
  {path: 'edithabilidad/:id', component:ModalHabilidadesComponent, canActivate: [GuardGuard]},
  {path: 'edit-proyecto/:id', component:ModalProyectosComponent, canActivate: [GuardGuard]},
  {path: 'addestudio', component:AddEstudioComponent, canActivate: [GuardGuard]},
  {path: 'addexpe', component:AddExperienciaComponent, canActivate: [GuardGuard]},
  {path: 'add-desarrollo', component:AddDesarrolloComponent, canActivate: [GuardGuard]},
  {path: 'addhabilidad', component:AddHabilidadComponent, canActivate: [GuardGuard]},
  {path: 'addproyecto', component:AddProyectoComponent, canActivate: [GuardGuard]},
  {path: 'login', component:LoginComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
