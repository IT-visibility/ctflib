"use strict";
// WEBVERSIE VAN DE CTFLIB VOOR DEVELOPMENT
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * # Opdracht
 * Class representing an assignment
 * ```typescript
 * const opdracht = new Opdracht(1, "Opdracht 1", "Dit is opdracht 1", 10, "Categorie 1", localStorage.getItem("token"), localStorage.getItem("uid")));
 * ```
 * @param id
 * @param naam
 * @param omschrijving
 * @param punten
 * @param categorie
 * @param token
 * @returns
 * @example
 */
export default class Opdracht {
    constructor(id, naam, omschrijving, punten, categorie, token, userId) {
        this.id = id;
        this.naam = naam;
        this.omschrijving = omschrijving;
        this.punten = punten;
        this.categorie = categorie;
        this.token = token;
        this.userId = userId;
        this.flag = "flag{DIT_IS_EEN_DEBUG_FLAG}";
    }
    /**
     * # val
     * Return up-to-date value of the given identifier
     * @param identifier
     * @returns
     */
    val(identifier) {
        switch (identifier) {
            case "id":
                return this.id;
            case "naam":
                return this.naam;
            case "omschrijving":
                return this.omschrijving;
            case "punten":
                return this.punten;
            case "categorie":
                return this.categorie;
            default:
                return "";
        }
    }
    /**
     * # runSQL
     * Run SQL query on the database
     * ```typescript
     * opdracht.runSQL("SELECT * FROM opdrachten;");
     * ```
     * @param query
     * @returns
     */
    runUnsafeSQL(query, setup) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let SQL = yield initSqlJs({});
                let y = new SQL.Database();
                y.run(setup);
                let result = y.exec(query);
                resolve(result);
            }));
        });
    }
    /**
     * # getFlag
     * Get the flag of the assignment
     * ```typescript
     * await opdracht.getFlag();
     * ```
     * Standard key for development: `0123456789ABCDEFFEDCBA987654321089ABCDEF01234567`
     * @returns Promise<string>
     */
    getFlag() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let flag = "flag{DIT_IS_EEN_DEBUG_FLAG}";
                resolve(flag);
            }));
        });
    }
}