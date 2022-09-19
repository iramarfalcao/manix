#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import generate from './services/generate';
import getMovies from './services/movieScraper';
import validate from './services/validate';
import { createCommand } from 'commander';

export const init = () => {
  clear();
  console.log(chalk.green(figlet.textSync('MANIX - Belzebú', { horizontalLayout: 'full' })));
}

export default init;

export const executeCLI = () => {

  const program = createCommand();

  program
    .version('0.0.1')
    .description("A CLI for Belzebú CC")
    .option('-g, --generate', 'Generate Numbers', generate)
    .option('-vf, --validate-file', 'Validate Input File', validate)

    .option('-gm, --get-movies', 'Test get Movies', getMovies)
    // .option('-P, --pineapple', 'Add pineapple')
    //   .option('-b, --bbq <asd...>', 'Add bbq sauce')
    //   .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
    //   .option('-C, --no-cheese', 'You do not want any cheese')
    .parse(process.argv);

  // const options = program.opts();
  // if (options.generate) { console.log('  - generate') };

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
}