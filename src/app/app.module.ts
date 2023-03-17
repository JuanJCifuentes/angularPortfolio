import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SeccionHeroComponent } from './componentes/seccion-hero/seccion-hero.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { ModalImgPerfilComponent } from './modales/modal-img-perfil/modal-img-perfil.component';
import { ModalInfoPerfilComponent } from './modales/modal-info-perfil/modal-info-perfil.component';
import { ModalBannerComponent } from './modales/modal-banner/modal-banner.component';
import { ModalSobremiComponent } from './modales/modal-sobremi/modal-sobremi.component';
import { ModalDesarrollowebComponent } from './modales/modal-desarrolloweb/modal-desarrolloweb.component';
import { ModalEstudiosComponent } from './modales/modal-estudios/modal-estudios.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ModalHabilidadesComponent } from './modales/modal-habilidades/modal-habilidades.component';
import { ModalProyectosComponent } from './modales/modal-proyectos/modal-proyectos.component';
import { SPersonaService } from './servicios/s-persona.service';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeccionHeroComponent,
    SobreMiComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    LogoutComponent,
    ModalLoginComponent,
    ModalImgPerfilComponent,
    ModalInfoPerfilComponent,
    ModalBannerComponent,
    ModalSobremiComponent,
    ModalDesarrollowebComponent,
    ModalEstudiosComponent,
    ModalExperienciaComponent,
    ModalHabilidadesComponent,
    ModalProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SPersonaService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
