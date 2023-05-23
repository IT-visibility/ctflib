export class Opdracht {
    id: number;
    naam: string;
    omschrijving: string;
    punten: number;
    categorie: string;
    token: string;
    constructor(id: number, naam: string, omschrijving: string, punten: number, categorie: string, token: string) {
        this.id = id;
        this.naam = naam;
        this.omschrijving = omschrijving;
        this.punten = punten;
        this.categorie = categorie;
        this.token = token;
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

}