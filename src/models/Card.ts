export class Card {
    idCard: string;

    constructor(id: string) {
        this.idCard = id;
    }

    public static generateNumber(e: number) {
        console.log("-----------", e);
        return "9998889876263748";
    }
}