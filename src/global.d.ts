/// <reference types="svelte" />

type DisplayMode = 'hiragana' | 'katakana';

type SourceOfTruth = import('./data').SourceOfTruth;

type Romaji = keyof SourceOfTruth;
type Hiragana = SourceOfTruth[Romaji]['hiragana']
type Katakana = SourceOfTruth[Romaji]['katakana']
type Kana = Hiragana | Katakana;

interface KanaEntry {
  hiragana: Hiragana;
  katakana: Katakana;
  obsolete?: boolean;
}

interface KanaItem extends KanaEntry {
  romaji: Romaji;
}

type KanaDict = Record<Romaji, KanaEntry>;

interface GuessEntry {
  correct: number;
  total: number;
}

type GuessDict = Record<Kana, GuessEntry>;
