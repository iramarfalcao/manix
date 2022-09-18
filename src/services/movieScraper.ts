import axios from 'axios';
import { load } from 'cheerio';

const getMovies = async () => {
    const url = "http://pt.wikipedia.org/wiki/Oscar_de_melhor_filme";
    const { data } = await axios.get(url);
    const $ = load(data)
    const list: { name: string; year: string; }[] = [];

    $(".wikitable tbody tr").each((index, elem) => {
        const winners = $(elem).find('td[style*="background:#FAEB86"]');
        const name = winners.last().text().replace("\n", "");
        if (name !== "") {
            const year = winners.first().prev("td").text().replace("\n", "").slice(-4);
            const movie = { name, year };
            list.push(movie);
        }
    });

    console.log(list);
}

export default getMovies;