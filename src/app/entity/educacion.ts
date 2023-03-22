export class Educacion {

    id?: number;
    title: string;
    institucion: string;
    primerDia: string;
    ultimoDia: string;
    descripcion: string;

    constructor(title:string, institucion:string, primerDia:string, ultimoDia:string, descripcion:string) {
        this.title = title;
        this.institucion = institucion;
        this.primerDia = primerDia;
        this.ultimoDia = ultimoDia;
        this.descripcion = descripcion;
    }


}
