// single source of truth
const _source = {
  a: {
    hira: 'あ',
    kata: 'ア',
  },
  i: {
    hira: 'い',
    kata: 'イ',
  },
  u: {
    hira: 'う',
    kata: 'ウ',
  },
  e: {
    hira: 'え',
    kata: 'エ',
  },
  o: {
    hira: 'お',
    kata: 'オ',
  },
  ka: {
    hira: 'か',
    kata: 'カ',
  },
  ki: {
    hira: 'き',
    kata: 'キ',
  },
  ku: {
    hira: 'く',
    kata: 'ク',
  },
  ke: {
    hira: 'け',
    kata: 'ケ',
  },
  ko: {
    hira: 'こ',
    kata: 'コ',
  },
  sa: {
    hira: 'さ',
    kata: 'サ',
  },
  shi: {
    hira: 'し',
    kata: 'シ',
  },
  su: {
    hira: 'す',
    kata: 'ス',
  },
  se: {
    hira: 'せ',
    kata: 'セ',
  },
  so: {
    hira: 'そ',
    kata: 'ソ',
  },
  ta: {
    hira: 'た',
    kata: 'タ',
  },
  chi: {
    hira: 'ち',
    kata: 'チ',
  },
  tsu: {
    hira: 'つ',
    kata: 'ツ',
  },
  te: {
    hira: 'て',
    kata: 'テ',
  },
  to: {
    hira: 'と',
    kata: 'ト',
  },
  na: {
    hira: 'な',
    kata: 'ナ',
  },
  ni: {
    hira: 'に',
    kata: 'ニ',
  },
  nu: {
    hira: 'ぬ',
    kata: 'ヌ',
  },
  ne: {
    hira: 'ね',
    kata: 'ネ',
  },
  no: {
    hira: 'の',
    kata: 'ノ',
  },
  ha: {
    hira: 'は',
    kata: 'ハ',
  },
  hi: {
    hira: 'ひ',
    kata: 'ヒ',
  },
  fu: {
    hira: 'ふ',
    kata: 'フ',
  },
  he: {
    hira: 'へ',
    kata: 'ヘ',
  },
  ho: {
    hira: 'ほ',
    kata: 'ホ',
  },
  ma: {
    hira: 'ま',
    kata: 'マ',
  },
  mi: {
    hira: 'み',
    kata: 'ミ',
  },
  mu: {
    hira: 'む',
    kata: 'ム',
  },
  me: {
    hira: 'め',
    kata: 'メ',
  },
  mo: {
    hira: 'も',
    kata: 'モ',
  },
  ya: {
    hira: 'や',
    kata: 'ヤ',
  },
  yu: {
    hira: 'ゆ',
    kata: 'ユ',
  },
  yo: {
    hira: 'よ',
    kata: 'ヨ',
  },
  ra: {
    hira: 'ら',
    kata: 'ラ',
  },
  ri: {
    hira: 'り',
    kata: 'リ',
  },
  ru: {
    hira: 'る',
    kata: 'ル',
  },
  re: {
    hira: 'れ',
    kata: 'レ',
  },
  ro: {
    hira: 'ろ',
    kata: 'ロ',
  },
  wa: {
    hira: 'わ',
    kata: 'ワ',
  },
  wi: {
    hira: 'ゐ',
    kata: 'ヰ',
    obsolete: true,
  },
  we: {
    hira: 'ゑ',
    kata: 'ヱ',
    obsolete: true,
  },
  wo: {
    hira: 'を',
    kata: 'ヲ',
  },
  n: {
    hira: 'ん',
    kata: 'ン',
  }
} as const;

export type SourceOfTruth = typeof _source;
export const KANA = _source;