// single source of truth
const _source = {
  a: {
    hiragana: 'あ',
    katakana: 'ア',
  },
  i: {
    hiragana: 'い',
    katakana: 'イ',
  },
  u: {
    hiragana: 'う',
    katakana: 'ウ',
  },
  e: {
    hiragana: 'え',
    katakana: 'エ',
  },
  o: {
    hiragana: 'お',
    katakana: 'オ',
  },
  ka: {
    hiragana: 'か',
    katakana: 'カ',
  },
  ki: {
    hiragana: 'き',
    katakana: 'キ',
  },
  ku: {
    hiragana: 'く',
    katakana: 'ク',
  },
  ke: {
    hiragana: 'け',
    katakana: 'ケ',
  },
  ko: {
    hiragana: 'こ',
    katakana: 'コ',
  },
  sa: {
    hiragana: 'さ',
    katakana: 'サ',
  },
  shi: {
    hiragana: 'し',
    katakana: 'シ',
    alias: ['si'],
  },
  su: {
    hiragana: 'す',
    katakana: 'ス',
  },
  se: {
    hiragana: 'せ',
    katakana: 'セ',
  },
  so: {
    hiragana: 'そ',
    katakana: 'ソ',
  },
  ta: {
    hiragana: 'た',
    katakana: 'タ',
  },
  chi: {
    hiragana: 'ち',
    katakana: 'チ',
    alias: ['ti'],
  },
  tsu: {
    hiragana: 'つ',
    katakana: 'ツ',
    alias: ['tu'],
  },
  te: {
    hiragana: 'て',
    katakana: 'テ',
  },
  to: {
    hiragana: 'と',
    katakana: 'ト',
  },
  na: {
    hiragana: 'な',
    katakana: 'ナ',
  },
  ni: {
    hiragana: 'に',
    katakana: 'ニ',
  },
  nu: {
    hiragana: 'ぬ',
    katakana: 'ヌ',
  },
  ne: {
    hiragana: 'ね',
    katakana: 'ネ',
  },
  no: {
    hiragana: 'の',
    katakana: 'ノ',
  },
  ha: {
    hiragana: 'は',
    katakana: 'ハ',
  },
  hi: {
    hiragana: 'ひ',
    katakana: 'ヒ',
  },
  fu: {
    hiragana: 'ふ',
    katakana: 'フ',
    alias: ['hu'],
  },
  he: {
    hiragana: 'へ',
    katakana: 'ヘ',
  },
  ho: {
    hiragana: 'ほ',
    katakana: 'ホ',
  },
  ma: {
    hiragana: 'ま',
    katakana: 'マ',
  },
  mi: {
    hiragana: 'み',
    katakana: 'ミ',
  },
  mu: {
    hiragana: 'む',
    katakana: 'ム',
  },
  me: {
    hiragana: 'め',
    katakana: 'メ',
  },
  mo: {
    hiragana: 'も',
    katakana: 'モ',
  },
  ya: {
    hiragana: 'や',
    katakana: 'ヤ',
  },
  yu: {
    hiragana: 'ゆ',
    katakana: 'ユ',
  },
  yo: {
    hiragana: 'よ',
    katakana: 'ヨ',
  },
  ra: {
    hiragana: 'ら',
    katakana: 'ラ',
  },
  ri: {
    hiragana: 'り',
    katakana: 'リ',
  },
  ru: {
    hiragana: 'る',
    katakana: 'ル',
  },
  re: {
    hiragana: 'れ',
    katakana: 'レ',
  },
  ro: {
    hiragana: 'ろ',
    katakana: 'ロ',
  },
  wa: {
    hiragana: 'わ',
    katakana: 'ワ',
  },
  wi: {
    hiragana: 'ゐ',
    katakana: 'ヰ',
    obsolete: true,
  },
  we: {
    hiragana: 'ゑ',
    katakana: 'ヱ',
    obsolete: true,
  },
  wo: {
    hiragana: 'を',
    katakana: 'ヲ',
  },
  n: {
    hiragana: 'ん',
    katakana: 'ン',
    alias: ['nn'],
  }
} as const;

export type SourceOfTruth = typeof _source;
export const KANA = _source;