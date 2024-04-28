export abstract class vrs {

  loading_btn: boolean = false;
  loading_page: boolean = false;
  loading_table: boolean = false;

  idxTable: number = 0;

  //enums
  RUOLO = {
    ADMIN: 1,
    UTENTE: 2,
    VISITATORE: 3
  }

  CATEGORIA = {
    PARTITA: 1,
    ANTEPOST: 2,
    GIRONE: 3,
    ELIMINATORIE: 4
  }

  GRUPPO_PUNTI = {
    FISSO: 1,
    DOPPIA_CHANCE: 2,
    UNDER_OVER: 5,
    GOL_NOGOL: 4,
    PARI_DISPARI: 3,
    RIS_ESATTO: 6,
    VINCENTE_TORNEO: 7,
    MIGLIOR_ATTACCO: 8,
    MIGLIOR_DIFESA: 9,
    CAPOCANNONIERE: 10,
    PRIMA_GIRONE: 11,
    SECONDA_GIRONE: 12,
    TERZA_GIRONE: 13,
    ULTIMA_GIRONE: 14,
    GIRONE_COMPLETO: 15,
    TABELLONE_COMPLETO: 21

  }

  VIEW_PLAYER = {
    OPZIONI: 1,
    NEW_SCHEDA: 2,
    UPD_SCHEDA: 3,
    SCHEDA_RANDOM: 4,
    LISTA_SCHEDE: 5
  }

  SI_NO = {
    SI_V: "1",
    NO_V: "0",
    SI_S: "SI",
    NO_S: "NO",
  }

  STATO_COMP = {
    APERTA: "1",
    CHIUSA: "0"
  }

  TAB_ASS = {
    START: 0,
    DATI_UTENTI: 1,
    DATI_SQUADRE: 2,
    DATI_CANNONIERI: 3,
    DATI_SCHEDE: 4,
    DATI_COMPETIZIONI: 5,
    EVENTI_SQUADRE: 6,
    EVENTI_CALENDARIO: 7,//da sostituire con calendario
    EVENTI_PRONOSTICI: 8,
    EVENTI_SCHEDE: 9,
    RISULTATI: 10,
    MODIFICABILI: 11,
    CONCLUSE: 12
  }

  LOGIN = {
    SIGN_IN: 1,
    REGISTER: 2,
    REC_PASS: 3
  }

  STATO_SCHEDA = {
    APERTA: "1",
    CONCLUSA: "5"
  }

}