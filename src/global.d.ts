/// <reference types="svelte" />

type QuizMode = 'hiragana' | 'katakana';

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
type GuessEvent = string;


// QUIZ ACTIONS

interface SkipAction {
  type: 'skip';
  mode: QuizMode;
  kana: KanaItem;
}

interface GuessAction {
  type: 'guess';
  mode: QuizMode;
  kana: KanaItem;
  guess: string;
}

type QuizAction = GuessAction | SkipAction;
