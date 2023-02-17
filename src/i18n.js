import { hf } from './helpers'

/**
 * Dictionary defaults
 */
export const DICT_DEFAULTS = {
    btnOk: 'OK',
    btnCancel: 'CANCEL',
    btnClear: 'CLEAR'
}

class Locale {
    /**
     * Creates i18n locale
     * @param {string[]} months List of month names
     * @param {string[]} shortMonths List of shortened month names
     * @param {string[]} days List of day names
     * @param {string[]} shortDays List of 3-letter day names
     * @param {string[]} shorterDays List of 2-letter day names
     * @param {number} firstDay First day of the week (1 - 7; Monday - Sunday)
     * @param {Object} dict Dictionary of words to be used on the UI
     * @param {string} dict.btnOk OK button text
     * @param {string} dict.btnCancel Cancel button text
     * @param {string} dict.btnClear Clear button text
     */
    constructor(months, shortMonths, days, shortDays, shorterDays, firstDay, dict) {
        this.months = months
        this.shortMonths = shortMonths || this.months.map(x => x.substr(0, 3))
        this.days = days
        this.shortDays = shortDays || this.days.map(x => x.substr(0, 3))
        this.shorterDays = shorterDays || this.days.map(x => x.substr(0, 2))
        this.firstDay = firstDay
        this.dict = hf.extend(DICT_DEFAULTS, dict)
    }
}

/**
 * Internationalization
 */
export const i18n = {
    // expose Locale class
    Locale: Locale,
    /**
     * English
     */
    en: new Locale('January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), null,
        'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'), null, null, 7),
    /**
     * Polish
     */
    pl: new Locale('Styczeń_Luty_Marzec_Kwiecień_Maj_Czerwiec_Lipiec_Sierpień_Wrzesień_Październik_Listopad_Grudzień'.split('_'), 
        'Sty._Lut._Mar._Kwi._Maj_Cze._Lip._Sie._Wrz._Paź._Lis._Gru.'.split('_'),
        'Niedziela_Poniedziałek_Wtorek_Środa_Czwartek_Piątek_Sobota'.split('_'), 
        'Niedz._Pon._Wt._Śr._Czw._Pt._Sob.'.split('_'), 
        'Nd_Pn_Wt_Śr_Cz_Pt_Sb'.split('_'), 1, {
            btnCancel: 'Anuluj', btnClear: 'Wyczyść'
        }),
    /**
     * French
     */
    fr: new Locale('janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'), 
        'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'), 
        'dim._lun._mar._mer._jeu._ven._sam.'.split('_'), 
        'di_lu_ma_me_je_ve_sa'.split('_'), 1, {
            btnCancel: 'Abandonner', btnClear: 'Effacer'
        }),
    /**
     * German
     */
    de: new Locale('Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'), 
        'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'), 
        'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'), 
        'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'), 1, {
            btnCancel: 'Stornieren', btnClear: 'Löschen'
        }),
}
