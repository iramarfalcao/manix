import fs, { readFileSync, writeFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';
import readline from 'readline';

export class File {

    // ✅ write to file SYNCHRONOUSLY
    static syncWriteFile({ filename, data, flag = 'w' }: { filename: string; data: any; flag?: string }) {
        /**
         * flags:
         *  - w = Open file for reading and writing. File is created if not exists
         *  - a+ = Open file for reading and appending. The file is created if not exists
         */
        writeFileSync(join('input', filename), data, { flag: flag });

        const contents = this.syncReadFile(filename);

        console.log(contents); // 👉️ "One Two Three Four"

        return contents;
    }

    // ✅ write to file ASYNCHRONOUSLY
    static async asyncWriteFile({ filename, data, flag = 'w' }: { filename: string; data: any; flag?: string }) {
        /**
         * flags:
         *  - w = Open file for reading and writing. File is created if not exists
         *  - a+ = Open file for reading and appending. The file is created if not exists
         */
        try {
            await fsPromises.writeFile(join('input', filename), data, { flag: flag });

            const contents = await this.asyncReadFile(filename);

            console.log(contents); // 👉️ "One Two Three Four"

            return contents;
        } catch (err) {
            console.log(err);
            return 'Something went wrong';
        }
    }

    static syncReadFile(filename: string) {
        return readFileSync(join('input', filename), 'utf-8');
    }

    static asyncReadFile(filename: string) {
        return fsPromises.readFile(join('input', filename), 'utf-8');
    }

    static async readFileByLine({ filename, func = false }: { filename: string, func?: Function | boolean }) {

        const fileStream = fs.createReadStream(join('input', filename));
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            if (func) {
                console.log('haveFunction()');
            } else {
                console.log('=================');
                console.log(line);
            }
        }
    }
}