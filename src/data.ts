// single source of truth
const _source = {
  // Monographs
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
  si: {
    hiragana: 'し',
    katakana: 'シ',
    alias: ['shi'],
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
  ti: {
    hiragana: 'ち',
    katakana: 'チ',
    alias: ['chi'],
  },
  tu: {
    hiragana: 'つ',
    katakana: 'ツ',
    alias: ['tsu'],
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
  hu: {
    hiragana: 'ふ',
    katakana: 'フ',
    alias: ['fu'],
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
  nn: {
    hiragana: 'ん',
    katakana: 'ン',
    alias: ['n'],
  },

  // Digraphs
  kya: {
    hiragana: 'きゃ',
    katakana: 'キャ',
  },
  kyu: {
    hiragana: 'きゅ',
    katakana: 'キュ',
  },
  kyo: {
    hiragana: 'きょ',
    katakana: 'キョ',
  },
  sya: {
    hiragana: 'しゃ',
    katakana: 'シャ',
    alias: ['sha'],
  },
  syu: {
    hiragana: 'しゅ',
    katakana: 'シュ',
    alias: ['shu'],
  },
  syo: {
    hiragana: 'しょ',
    katakana: 'ショ',
    alias: ['sho'],
  },
  tya: {
    hiragana: 'ちゃ',
    katakana: 'チャ',
    alias: ['cha'],
  },
  tyu: {
    hiragana: 'ちゅ',
    katakana: 'チュ',
    alias: ['chu'],
  },
  tyo: {
    hiragana: 'ちょ',
    katakana: 'チョ',
    alias: ['cho'],
  },
  nya: {
    hiragana: 'にゃ',
    katakana: 'ニャ',
  },
  nyu: {
    hiragana: 'にゅ',
    katakana: 'ニュ',
  },
  nyo: {
    hiragana: 'にょ',
    katakana: 'ニョ',
  },
  hya: {
    hiragana: 'ひゃ',
    katakana: 'ヒャ',
  },
  hyu: {
    hiragana: 'ひゅ',
    katakana: 'ヒュ',
  },
  hyo: {
    hiragana: 'ひょ',
    katakana: 'ヒョ',
  },
  mya: {
    hiragana: 'みゃ',
    katakana: 'ミャ',
  },
  myu: {
    hiragana: 'みゅ',
    katakana: 'ミュ',
  },
  myo: {
    hiragana: 'みょ',
    katakana: 'ミョ',
  },
  rya: {
    hiragana: 'りゃ',
    katakana: 'リャ',
  },
  ryu: {
    hiragana: 'りゅ',
    katakana: 'リュ',
  },
  ryo: {
    hiragana: 'りょ',
    katakana: 'リョ',
  },

  // Diacritics
  ga: {
    hiragana: 'が',
    katakana: 'ガ',
  },
  gi: {
    hiragana: 'ぎ',
    katakana: 'ギ',
  },
  gu: {
    hiragana: 'ぐ',
    katakana: 'グ',
  },
  ge: {
    hiragana: 'げ',
    katakana: 'ゲ',
  },
  go: {
    hiragana: 'ご',
    katakana: 'ゴ',
  },
  za: {
    hiragana: 'ざ',
    katakana: 'ザ',
  },
  zi: {
    hiragana: 'じ',
    katakana: 'ジ',
    alias: ['ji'],
  },
  zu: {
    hiragana: 'ず',
    katakana: 'ズ',
  },
  ze: {
    hiragana: 'ぜ',
    katakana: 'ゼ',
  },
  zo: {
    hiragana: 'ぞ',
    katakana: 'ゾ',
  },
  da: {
    hiragana: 'だ',
    katakana: 'ダ',
  },
  di: {
    hiragana: 'ぢ',
    katakana: 'ヂ',
    alias: ['ji'],
  },
  du: {
    hiragana: 'づ',
    katakana: 'ヅ',
    alias: ['zu', 'dzu'],
  },
  de: {
    hiragana: 'で',
    katakana: 'デ',
  },
  do: {
    hiragana: 'ど',
    katakana: 'ド',
  },
  ba: {
    hiragana: 'ば',
    katakana: 'バ',
  },
  bi: {
    hiragana: 'び',
    katakana: 'ビ',
  },
  bu: {
    hiragana: 'ぶ',
    katakana: 'ブ',
  },
  be: {
    hiragana: 'べ',
    katakana: 'ベ',
  },
  bo: {
    hiragana: 'ぼ',
    katakana: 'ボ',
  },
  pa: {
    hiragana: 'ぱ',
    katakana: 'パ',
  },
  pi: {
    hiragana: 'ぴ',
    katakana: 'ピ',
  },
  pu: {
    hiragana: 'ぷ',
    katakana: 'プ',
  },
  pe: {
    hiragana: 'ぺ',
    katakana: 'ぺ',
  },
  po: {
    hiragana: 'ぽ',
    katakana: 'ポ',
  },

  // Digraphs with diacritics
  gya: {
    hiragana: 'ぎゃ',
    katakana: 'ギャ',
  },
  gyu: {
    hiragana: 'ぎゅ',
    katakana: 'ギュ',
  },
  gyo: {
    hiragana: 'ぎょ',
    katakana: 'ギョ',
  },
  zya: {
    hiragana: 'じゃ',
    katakana: 'ジャ',
    alias: ['ja'],
  },
  zyu: {
    hiragana: 'じゅ',
    katakana: 'ジュ',
    alias: ['ju'],
  },
  zyo: {
    hiragana: 'じょ',
    katakana: 'ジョ',
    alias: ['jo'],
  },
  dya: {
    hiragana: 'ぢゃ',
    katakana: 'ヂャ',
    alias: ['ja', 'dja'],
  },
  dyu: {
    hiragana: 'ぢゅ',
    katakana: 'ヂュ',
    alias: ['ju', 'dju'],
  },
  dyo: {
    hiragana: 'ぢょ',
    katakana: 'ヂョ',
    alias: ['jo', 'djo'],
  },
  bya: {
    hiragana: 'びゃ',
    katakana: 'ビャ',
  },
  byu: {
    hiragana: 'びゅ',
    katakana: 'ビュ',
  },
  byo: {
    hiragana: 'びょ',
    katakana: 'ビョ',
  },
  pya: {
    hiragana: 'ぴゃ',
    katakana: 'ピャ',
  },
  pyu: {
    hiragana: 'ぴゅ',
    katakana: 'ピュ',
  },
  pyo: {
    hiragana: 'ぴょ',
    katakana: 'ピョ',
  },

} as const;

export type SourceOfTruth = typeof _source;
export const KANA = _source;