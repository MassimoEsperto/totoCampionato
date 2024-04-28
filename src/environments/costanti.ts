// COSTANTI

export const SERVICE_TYPE = {
    ADMIN: {
        DATI: "/admin/dati/",
        EVENTI: "/admin/eventi/",
        RISULTATI: "/admin/risultati/"
    },
    PLAYER: "/player/",
    AUT: "/autenticazione/"
}

export const AUTH_SERVICE = {

    SIGNI_IN: "sign-in",
    RECUPERA_PASSWORD: "recupera_password",
    REGISTER_UTENTE: "register_utente"
}

export const PLAYER_SERVICE = {

    GET_SCHEDA_MASTER_UTENTE: "get_scheda_master_utente",
    GET_SCHEDA_RANDOM: "get_scheda_random",
    GET_COMBO_SCHEDA: "get_combo_scheda",
    GET_INFO_HOME: "get_info_home",
    SET_DETTAGLIO_SCHEDA: "set_dettaglio_scheda",
    UPD_DETTAGLIO_SCHEDA: "upd_dettaglio_scheda",
    COPY_DETTAGLIO_SCHEDA: "copy_dettaglio_scheda",
    GET_DETTAGLIO_SCHEDA: "get_dettaglio_scheda",
    GET_SCHEDE_UTENTE: "get_schede_utente",
    GET_CLASSIFICA: "get_classifica",
    GET_CLASSIFICA_GENERALE: "get_classifica_generale",
    DEL_DETTAGLIO_SCHEDA: "del_dettaglio_scheda"

}

export const ADMIN_SERVICE = {

    DATI: {
        GET_UTENTI: "get_utenti",
        UPD_UTENTE: "upd_utente",
        DEL_UTENTE: "del_utente",
        GET_SQUADRE: "get_squadre",
        SET_SQUADRA: "set_squadra",
        DEL_SQUADRA: "del_squadra",
        GET_CANNONIERI: "get_cannonieri",
        SET_CANNONIERE: "set_cannoniere",
        DEL_CANNONIERE: "del_cannoniere",
        GET_COMPETIZIONI: "get_competizioni",
        SET_COMPETIZIONE: "set_competizione",
        UPD_COMPETIZIONE: "upd_competizione",
        GET_SCHEDE: "get_schede",
        DEL_SCHEDA: "del_scheda"
    },
    EVENTI: {
        GET_COMBO: "get_combo",
        GET_TIPI_PRO_BY_COMP: "get_tipi_pro_by_comp",
        SET_TIPI_PRO_BY_COMP: "set_tipi_pro_by_comp",
        DEL_TIPI_PRO_BY_COMP: "del_tipi_pro_by_comp",
        GET_CANNONIERI_COMP: "get_cannonieri_comp",
        SET_CANNONIERE_COMP: "set_cannoniere_comp",
        DEL_CANNONIERE_COMP: "del_cannoniere_comp",
        GET_SQUADRE_COMP: "get_squadre_comp",
        SET_SQUADRA_COMP: "set_squadra_comp",
        DEL_SQUADRA_COMP: "del_squadra_comp",
        GET_SCHEDA_MASTER: "get_scheda_master",
        SET_EVENT_MASTER: "set_event_master",
        DEL_EVENT_MASTER: "del_event_master",
        GET_GIORNATE_COMP: "get_giornate_comp",
        SET_GIORNATE_COMP: "set_giornate_comp",
        DEL_GIORNATE_COMP: "del_giornate_comp"
        
    },
    RISULTATI: {
        GET_RISULTATI_POSSIBILI: "get_risultati_possibili",
        GET_SCHEDA_RISULTATI: "get_scheda_risultati",
        GET_SCHEDE_CONCLUSE: "get_schede_concluse",
        SET_RISULTATO_PARTITA: "set_risultato_partita",
        SET_RISULTATO_ELIMINATORIE: "set_risultato_eliminatorie",
        SET_RISULTATO_ANTEPOST: "set_risultato_antepost",
        SET_RISULTATO_GIRONI: "set_risultato_gironi",
        GET_EVENTI_MOD: "get_eventi_mod",
        UPD_EVENTI_MOD: "upd_eventi_mod",
        SET_SCHEDE_CONCLUSE: "set_schede_concluse",
        GET_EVENTI: "get_eventi",
        GET_GIORNATE_POSSIBILI: "get_giornate_possibili",
        UPD_EVENTO: "upd_evento",
        UPD_DATA_EVENTO: "upd_data_evento",
        UPD_DATA_GIORNATA: "upd_data_giornata",
    }

}

export const PAGE = {
    EMPTY: "",
    DEFAULT: "/login",
    LOGIN: "login",
    DOWNLOAD_PDF: "/download/regolamento_schitcup.pdf",
    DASHBOARD: {
      PATH: "dashboard",
      _PATH: "/dashboard",
      ABSOLUTE: {
        HOME: "dashboard/home",
        CLASSIFICA: "dashboard/classifica",
        SCHEDE_UTENTE: "dashboard/schede-utente",
        _HOME: "/dashboard/home",
        _CLASSIFICA: "/dashboard/classifica",
        _SCHEDE_UTENTE: "/dashboard/schede-utente",
      },
      RELATIVE: {
        HOME: "home",
        CLASSIFICA: "classifica",
        SCHEDE_UTENTE: "schede-utente",
      }
    },
    ADMINISTRATOR: {
      PATH: "adminstrator",
      _PATH: "/adminstrator",
      ABSOLUTE: {
   
      },
      RELATIVE: {
       
      }
    }

}



