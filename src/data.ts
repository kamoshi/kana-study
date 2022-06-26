// single source of truth
const _source = [
  {
    romaji: 'a',
    hira: 'あ',
    kata: 'ア',
  },
  {
    romaji: 'i',
    hira: 'い',
    kata: 'イ',
  },
  {
    romaji: 'u',
    hira: 'う',
    kata: 'ウ',
  },
  {
    romaji: 'e',
    hira: 'え',
    kata: 'エ',
  },
  {
    romaji: 'o',
    hira: 'お',
    kata: 'オ',
  },
  {
    romaji: 'ka',
    hira: 'か',
    kata: 'カ',
  },
  {
    romaji: 'ki',
    hira: 'き',
    kata: 'キ',
  },
  {
    romaji: 'ku',
    hira: 'く',
    kata: 'ク',
  },
  {
    romaji: 'ke',
    hira: 'け',
    kata: 'ケ',
  },
  {
    romaji: 'ko',
    hira: 'こ',
    kata: 'コ',
  },
  {
    romaji: 'sa',
    hira: 'さ',
    kata: 'サ',
  },
  {
    romaji: 'shi',
    hira: 'し',
    kata: 'シ',
  },
  {
    romaji: 'su',
    hira: 'す',
    kata: 'ス',
  },
  {
    romaji: 'se',
    hira: 'せ',
    kata: 'セ',
  },
  {
    romaji: 'so',
    hira: 'そ',
    kata: 'ソ',
  },
  {
    romaji: 'ta',
    hira: 'た',
    kata: 'タ',
  },
  {
    romaji: 'chi',
    hira: 'ち',
    kata: 'チ',
  },
  {
    romaji: 'tsu',
    hira: 'つ',
    kata: 'ツ',
  },
  {
    romaji: 'te',
    hira: 'て',
    kata: 'テ',
  },
  {
    romaji: 'to',
    hira: 'と',
    kata: 'ト',
  },
  {
    romaji: 'na',
    hira: 'な',
    kata: 'ナ',
  },
  {
    romaji: 'ni',
    hira: 'に',
    kata: 'ニ',
  },
  {
    romaji: 'nu',
    hira: 'ぬ',
    kata: 'ヌ',
  },
  {
    romaji: 'ne',
    hira: 'ね',
    kata: 'ネ',
  },
  {
    romaji: 'no',
    hira: 'の',
    kata: 'ノ',
  },
  {
    romaji: 'ha',
    hira: 'は',
    kata: 'ハ',
  },
  {
    romaji: 'hi',
    hira: 'ひ',
    kata: 'ヒ',
  },
  {
    romaji: 'fu',
    hira: 'ふ',
    kata: 'フ',
  },
  {
    romaji: 'he',
    hira: 'へ',
    kata: 'ヘ',
  },
  {
    romaji: 'ho',
    hira: 'ほ',
    kata: 'ホ',
  },
  {
    romaji: 'ma',
    hira: 'ま',
    kata: 'マ',
  },
  {
    romaji: 'mi',
    hira: 'み',
    kata: 'ミ',
  },
  {
    romaji: 'mu',
    hira: 'む',
    kata: 'ム',
  },
  {
    romaji: 'me',
    hira: 'め',
    kata: 'メ',
  },
  {
    romaji: 'mo',
    hira: 'も',
    kata: 'モ',
  },
  {
    romaji: 'ya',
    hira: 'や',
    kata: 'ヤ',
  },
  {
    romaji: 'yu',
    hira: 'ゆ',
    kata: 'ユ',
  },
  {
    romaji: 'yo',
    hira: 'よ',
    kata: 'ヨ',
  },
  {
    romaji: 'ra',
    hira: 'ら',
    kata: 'ラ',
  },
  {
    romaji: 'ri',
    hira: 'り',
    kata: 'リ',
  },
  {
    romaji: 'ru',
    hira: 'る',
    kata: 'ル',
  },
  {
    romaji: 're',
    hira: 'れ',
    kata: 'レ',
  },
  {
    romaji: 'ro',
    hira: 'ろ',
    kata: 'ロ',
  },
  {
    romaji: 'wa',
    hira: 'わ',
    kata: 'ワ',
  },
  {
    romaji: 'wi',
    hira: 'ゐ',
    kata: 'ヰ',
    obsolete: true,
  },
  {
    romaji: 'we',
    hira: 'ゑ',
    kata: 'ヱ',
    obsolete: true,
  },
  {
    romaji: 'wo',
    hira: 'を',
    kata: 'ヲ',
  },
  {
    romaji: 'n',
    hira: 'ん',
    kata: 'ン',
  }
] as const;

export type SourceOfTruth = typeof _source;
export const KANA = _source.reduce((acc, next) => (acc[next.romaji] = next, acc), {} as KanaDict);