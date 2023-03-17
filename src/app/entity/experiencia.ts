export class Experiencia {

    id?: number;
    sector: string;
    institucion: string;
    primerDia: string;
    ultimoDia: string;
    descripcion: string;
    sobreMi: string;

    constructor(sector:string, institucion:string, primerDia:string, ultimoDia:string, descripcion:string, sobreMi:string) {
        this.sector = sector;
        this.institucion = institucion;
        this.primerDia = primerDia;
        this.ultimoDia = ultimoDia;
        this.descripcion = descripcion;
        this.sobreMi = sobreMi;
    }


}
