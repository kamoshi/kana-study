import { KANA } from "./data";


class StorageService {

  saveSelected(selected: Set<Romaji>) {
    localStorage.setItem('selected', JSON.stringify(Array.from(selected)));
  }

  loadSelected(): Set<Romaji> {
    const data = localStorage.getItem('selected');
    return new Set((data) ? JSON.parse(data) : []);
  }
}

function generateDict(): GuessDict {
  return Object.values(KANA)
    .reduce((acc, next) => (acc.push(next.hiragana), acc.push(next.katakana), acc), [] as Kana[])
    .reduce((acc, next) => (acc[next] = { correct: 0, total: 0 }, acc), {} as GuessDict);
}

export const storage = new StorageService();
