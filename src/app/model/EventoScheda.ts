export class EventoScheda {

    id?: string;
    gruppo: number = 0; // gruppo punti
    view: string = "";
    punti?: string; //da verificare se serve qua o nel valore.. secondo me nel valore
    valore: string = "";//ValoreEvento=new ValoreEvento(0,'') giocato
    id_dettaglio?: string;
    data_partita?: string;
    modificabile?: string;
    risultato?: string;
}