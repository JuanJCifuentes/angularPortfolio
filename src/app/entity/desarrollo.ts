export class Desarrollo {

    id?: number;
    sector: string;
    lenguaje: string;
    diaAprendido: string;

    constructor(sector:string, lenguaje:string, diaAprendido:string) {
        this.sector = sector;
        this.lenguaje = lenguaje;
        this.diaAprendido = diaAprendido;
    }


}
