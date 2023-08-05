export class Competizione {

    id?: string;
    nome?: string;
    sigla?: string;
    scadenza?: string;
    is_attiva?: string;
    is_open?: string;


    reset() {
        this.id = "";
        this.sigla = "";
        this.is_attiva = "";
        this.nome = "";
        this.scadenza = "";
        this.is_open = "";
    }

    set(item: any) {
        this.id = item.id;
        this.sigla = item.sigla;
        this.is_attiva = item.is_attiva;
        this.nome = item.nome;
        this.scadenza = item.scadenza;
        this.is_open = item.is_open;
    }

}