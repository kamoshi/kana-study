/// <reference types="svelte" />

type SourceOfTruth = import('./data').SourceOfTruth;

type Romaji = SourceOfTruth[number]['romaji']
type Hiragana = SourceOfTruth[number]['hira']
type Katakana = SourceOfTruth[number]['kata']
type Kana = Hiragana | Katakana;

interface KanaEntry {
  romaji: Romaji;
  hira: Hiragana;
  kata: Katakana;
  obsolete?: boolean;
}

interface GuessEntry {
  correct: number;
  total: number;
}

type KanaDict = Record<Romaji, KanaEntry>;
type GuessDict = Record<Kana, GuessEntry>;

type ChartMode = 'hiragana' | 'katakana';