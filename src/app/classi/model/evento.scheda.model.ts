export class EventoSchedaModel {

    id?: string;
    categoria: number = 0; //tipo antepost girone ecc
    gruppo: number = 0; // gruppo punti
    view: string = "";
    girone: string = ""; //da verificare se serve
    punti?: string; //da verificare se serve qua o nel valore.. secondo me nel valore
    valore: string = "";//ValoreEvento=new ValoreEvento(0,'')
    id_dettaglio?: string;
    data_partita?: string;
    modificabile?: string;
    risultato?: string;
}