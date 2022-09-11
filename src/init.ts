import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

const init = () => {
    clear();
    console.log(chalk.green(figlet.textSync('MANIX - Belzebú', { horizontalLayout: 'full' })));
}

export default init;