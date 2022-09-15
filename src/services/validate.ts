import fs from 'fs';
import readline from 'readline';
import { join } from 'path';
import { Card } from '../models/Card';
import { File } from '../models/File';


const validate = async () => {

    console.log("Started validate ======================================================================");

    const fileStream = fs.createReadStream(join('input', 'cards.txt'));
    const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

    const data: Array<Card> = [];

    for await (const line of rl) {

        const card = new Card(line);

        if (card.valid) { data.push(card) };

        console.log('--------------------------------------------------------');
        console.log(`
            número: ${card.cardNumber}
            bandeira: ${card.brand}
            válido: ${card.valid}
        `);
        console.log('--------------------------------------------------------');
    }

    data.map((card) => {
        File.asyncWriteFile({
            filename: './valid_cards.txt',
            data: `número: ${card.cardNumber} bandeira: ${card.brand}\n`,
            flag: 'a'
        });
    });

    // File.asyncWriteFile({ filename: './valid_cards.txt', data: + '\n', flag: 'a' });

    console.log("Finished validate =====================================================================");
}

export default validate;