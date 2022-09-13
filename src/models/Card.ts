export class Card {
    // idCard: string;

    // constructor(id: string) {
    // this.idCard = id;
    // }

    public static sumDigits(digit: number): number {
        if (digit > 9) {
            digit = digit % 10 + 1
            return this.sumDigits(digit);
        } else {
            return digit;
        }
    }

    public static getCardBrand(credidCardNumber: string) {

        let re = [
            { brand: 'electron', pattern: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/ },
            { brand: 'maestro', pattern: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/ },
            { brand: 'dankort', pattern: /^(5019)\d+$/ },
            { brand: 'interpayment', pattern: /^(636)\d+$/ },
            { brand: 'unionpay', pattern: /^(62|88)\d+$/ },
            { brand: 'visa', pattern: /^4[0-9]{12}(?:[0-9]{3})?$/ },
            { brand: 'mastercard', pattern: /^5[1-5][0-9]{14}$/ },
            { brand: 'amex', pattern: /^3[47][0-9]{13}$/ },
            { brand: 'diners', pattern: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
            { brand: 'discover', pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
            { brand: 'jcb', pattern: /^(?:2131|1800|35\d{3})\d{11}$/ }
        ]

        for (var key in re) {
            if (re[key].pattern.test(credidCardNumber)) {
                return re[key].brand;
            }
        }
    }
}