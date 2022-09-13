import { Card } from '../models/Card';
import { File } from '../models/File';

const generate = () => {
    console.log("Started generate ======================================================================");

    console.log(Card.getCardBrand('4124142222222222'));

    File.syncWriteFile({ filename: './example.txt', data: 'One\nTwo\nThree\nFour....' });

    setTimeout(() => {
        File.asyncWriteFile({ filename: 'example.txt', data: 'Six\nSeven\nEight\nNine\nTen', flag: 'a' });
    }, 5000);

    console.log("Finished generate =====================================================================");
}

export default generate;