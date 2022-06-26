import { KANA } from "./data";


const storageKey = 'guesses';


export class StorageService {

  save(data: GuessDict) {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }

  load(): GuessDict {
    const data = localStorage.getItem(storageKey);
    return (!!data) ? JSON.parse(data) : generateDict();
  }
  
}

function generateDict(): GuessDict {
  return Object.values(KANA)
    .reduce((acc, next) => (acc.push(next.hira), acc.push(next.kata), acc), [] as Kana[])
    .reduce((acc, next) => (acc[next] = { correct: 0, total: 0 }, acc), {} as GuessDict);
}
