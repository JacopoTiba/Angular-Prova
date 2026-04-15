export class LibroModel {
    public id?: string;
    public titolo: string;
    public autore: string;
    public genere: string;
    public anno: string;
    public sede: {
        citta: string;
        biblioteca: string;
        nCopie: number;
    };
    public descrizione: string;
    public copiePrestate: number;

    constructor(
        titolo: string,
        autore: string,
        genere: string,
        anno: string,
        sede: { citta: string; biblioteca: string; nCopie: number },
        descrizione: string,
        copiePrestate: number
    ) {
        this.titolo = titolo;
        this.autore = autore;
        this.genere = genere;
        this.anno = anno;
        this.sede = sede;
        this.descrizione = descrizione;
        this.copiePrestate = copiePrestate;
    }
}
