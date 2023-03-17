export class Persona {

    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    imagenPerfil: string;
    imagenBanner: string;
    sobreMi: string;
    email: string;
    password: string;

    constructor(nombre:string, apellido:string, titulo:string, imagenPerfil:string, imagenBanner:string, sobreMi:string, email: string, password: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.imagenPerfil = imagenPerfil;
        this.imagenBanner = imagenBanner;
        this.sobreMi = sobreMi;
        this.email = email;
        this.password = password;
    }

}
