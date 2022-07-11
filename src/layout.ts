type LayoutItem = Romaji | null;

export const MAIN: LayoutItem[][] = [
  ['a', 'i', 'u', 'e', 'o'],
  ['ka', 'ki', 'ku', 'ke', 'ko'],
  ['sa', 'si', 'su', 'se', 'so'],
  ['ta', 'ti', 'tu', 'te', 'to'],
  ['na', 'ni', 'nu', 'ne', 'no'],
  ['ha', 'hi', 'hu', 'he', 'ho'],
  ['ma', 'mi', 'mu', 'me', 'mo'],
  ['ya', null, 'yu', null, 'yo'],
  ['ra', 'ri', 'ru', 're', 'ro'],
  ['wa', null, null, null, 'wo'],
  [null, null, null, null, 'nn'],
]

export const DIGRAPHS: LayoutItem[][] = [
  ['kya', 'kyu', 'kyo'],
  ['gya', 'gyu', 'gyo'],
  ['sya', 'syu', 'syo'],
  ['zya', 'zyu', 'zyo'],
  ['tya', 'tyu', 'tyo'],
  ['dya', 'dyu', 'dyo'],
  ['nya', 'nyu', 'nyo'],
  ['hya', 'hyu', 'hyo'],
  ['bya', 'byu', 'byo'],
  ['mya', 'myu', 'myo'],
  ['pya', 'pyu', 'pyo'],
  ['rya', 'ryu', 'ryo'],
]

export const DIACRITICS: LayoutItem[][] = [
  ['ga', 'gi', 'gu', 'ge', 'go'],
  ['za', 'zi', 'zu', 'ze', 'zo'],
  ['da', 'di', 'du', 'de', 'do'],
  ['ba', 'bi', 'bu', 'be', 'bo'],
  ['pa', 'pi', 'pu', 'pe', 'po'],
]
