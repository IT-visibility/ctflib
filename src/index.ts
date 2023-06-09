const initSqlJs = require("sql.js");
const cryptojs = require("crypto");

// interface sqlData {
    
// }

/**
 * # Opdracht
 * Class representing an assignment
 * ```typescript
 * const opdracht = new Opdracht(1, "Opdracht 1", "Dit is opdracht 1", 10, "Categorie 1", "token");
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
class Opdracht {
    id: number;
    naam: string;
    omschrijving: string;
    punten: number;
    categorie: string;
    token: string;
    db: any;
    userId: string;
    constructor(
        id: number,
        naam: string,
        omschrijving: string,
        punten: number,
        categorie: string,
        token: string,
        userId: string,
    ) {
        this.id = id;
        this.naam = naam;
        this.omschrijving = omschrijving;
        this.punten = punten;
        this.categorie = categorie;
        this.token = token;
        this.userId = userId;
    }

    /**
     * # val
     * Return up-to-date value of the given identifier
     * @param identifier
     * @returns
     */
    val(identifier: string): string | number {
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
    async runUnsafeSQL(query: string, setup: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            let SQL = await initSqlJs({});

            let y = new SQL.Database();
            y.run(setup);
            let result = y.exec(query);
            resolve(result);
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
    async getFlag(): Promise<string> {
        return new Promise(async (resolve, reject) => {
            const opdrachtReq = await fetch("/api/opdracht", {
                method: "POST",
                body: JSON.stringify({
                    token: this.token,
                    id: this.id,
                    userId: this.userId,
                })
            })

            const opdracht = await opdrachtReq.json();

            resolve(cryptojs.TripleDES.decrypt(opdracht.flag, "0123456789ABCDEFFEDCBA987654321089ABCDEF01234567").toString(cryptojs.enc.Utf8));

        })
    }

}

module.exports = Opdracht;