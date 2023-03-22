export class Proyecto {

    id?: number;
    nombreProyecto: string;
    diaRealizado: string;
    imagenProyecto: string;
    urlLive: string;
    urlGithub: string;

    constructor(nombreProyecto:string, diaRealizado:string, imagenProyecto:string, urlLive:string, urlGithub:string) {
        this.nombreProyecto = nombreProyecto;
        this.diaRealizado = diaRealizado;
        this.imagenProyecto = imagenProyecto;
        this.urlLive = urlLive;
        this.urlGithub = urlGithub;
    }


}
