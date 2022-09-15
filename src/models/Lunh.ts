export class Luhn {

    public static sumDigits(digit: number): number {
        if (digit < 9) {
            return digit;
        } else {
            return digit % 10 + 1;
        }
    }

    public static sumDigitsV2(digit: number): number {
        if (digit > 9) {
            digit = digit % 10 + 1
            return this.sumDigitsV2(digit);
        } else {
            return digit;
        }
    }

    public static validate(cardNumber: string): boolean {

        // Valida quantidade de Dígitos
        // O Número do cartão possui menos/mais dígitos que o necessário
        const validSize = (cardNumber.length >= 13 && cardNumber.length <= 16) ? true : false

        //-------------------------------------------------------------------------------

        // Valida Luhn
        let sumPar = 0;
        let sumImpar = 0;
        let aux = 0;

        // Pares
        for (let i = cardNumber.length - 2; i >= 0; i = i - 2) {
            aux = Number.parseInt(cardNumber.charAt(i) + "");
            sumPar = sumPar + this.sumDigits(aux * 2);
        }

        // Impares
        for (let j = cardNumber.length - 1; j >= 0; j = j - 2) {
            aux = Number.parseInt(cardNumber.charAt(j) + "");
            sumImpar = sumImpar + aux;
        }

        return ((sumPar + sumImpar) % 10 == 0 && validSize) ? true : false;
    }
}