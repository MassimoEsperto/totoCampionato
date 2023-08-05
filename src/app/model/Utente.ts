export class Utente {

    id?: string;
    username?: string;
    nome?: string;
    cognome?: string;
    email?: string;
    cellulare?: string;
    ruolo?: string;
    versato?: string;
    giocate?: string;
    competizioni?: [];


    reset() {
        this.id = "";
        this.username = "";
        this.nome = "";
        this.cognome = "";
        this.email = "";
        this.cellulare = "";
        this.ruolo = "";
        this.versato = "";
        this.giocate = "";
        this.competizioni = [];
    }

    set(item: any) {
        this.id = item.id;
        this.username = item.username;
        this.nome = item.nome;
        this.cognome = item.cognome;
        this.email = item.email;
        this.cellulare = item.cellulare;
        this.ruolo = item.ruolo;
        this.versato = item.versato;
        this.giocate = item.giocate;
        this.competizioni = item.competizioni;

    }

}