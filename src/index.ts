const initSqlJs = require("sql.js");

interface sqlData {
    
}

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
export class Opdracht {
    id: number;
    naam: string;
    omschrijving: string;
    punten: number;
    categorie: string;
    token: string;
    db: any;
    constructor(
        id: number,
        naam: string,
        omschrijving: string,
        punten: number,
        categorie: string,
        token: string,
        db: any
    ) {
        this.id = id;
        this.naam = naam;
        this.omschrijving = omschrijving;
        this.punten = punten;
        this.categorie = categorie;
        this.token = token;
    }

    async initDB() {
        let x = await initSqlJs({
            locateFile: (file: any) => `./node_modules/sql.js/dist/${file}`,
        });

        this.db = new x.Database();
        this.db.run("CREATE TABLE opdrachten (id, naam, omschrijving, punten, categorie);");
        this.db.run("INSERT INTO opdrachten VALUES (1, 'Opdracht 1', 'Dit is opdracht 1', 10, 'Categorie 1');");
        return this.db;
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
    async runUnsafeSQL(query: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            let x = await initSqlJs({
                locateFile: (file: any) => `./${file}`,
            });

            let y = new x.Database();
            y.run("CREATE TABLE opdrachten (id, naam, omschrijving, punten, categorie);");
            y.run("INSERT INTO opdrachten VALUES (1, 'Opdracht 1', 'Dit is opdracht 1', 10, 'Categorie 1');");
            let result = y.exec(query);
            resolve(result);
        });
    }
}