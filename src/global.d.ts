/// <reference types="svelte" />

type SourceOfTruth = import('./data').SourceOfTruth;

type Romaji = keyof SourceOfTruth;
type Hiragana = SourceOfTruth[Romaji]['hira']
type Katakana = SourceOfTruth[Romaji]['kata']
type Kana = Hiragana | Katakana;

interface KanaEntry {
  hira: Hiragana;
  kata: Katakana;
  obsolete?: boolean;
}

type KanaDict = Record<Romaji, KanaEntry>;

interface GuessEntry {
  correct: number;
  total: number;
}

type GuessDict = Record<Kana, GuessEntry>;

type ChartMode = 'hiragana' | 'katakana';