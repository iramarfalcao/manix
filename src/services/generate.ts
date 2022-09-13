import { Card } from '../models/Card';
import { File } from '../models/File';

const generate = async () => {
    console.log("Started generate ======================================================================");

    console.log(Card.getCardBrand('4124142222222222'));
    console.log(Card.sumDigits(999))
    console.log(Card.sumDigits(488))
    console.log(Card.sumDigits(99))
    console.log(Card.sumDigits(92))
    console.log(Card.sumDigits(34))

    File.syncWriteFile({ filename: './example.txt', data: 'One\nTwo\nThree\nFour....' });

    // setTimeout(() => {
    //     File.asyncWriteFile({ filename: 'example.txt', data: 'Six\nSeven\nEight\nNine\nTen', flag: 'a' });
    // }, 5000);

    await File.readFileByLine({ filename: 'example.txt', func: () => { } });

    console.log("Finished generate =====================================================================");
}

export default generate;