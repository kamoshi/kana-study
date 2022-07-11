/// <reference types="svelte" />

type AppState = 'select' | 'quiz' | 'results';
type QuizMode = 'hiragana' | 'katakana';

type SourceOfTruth = import('./data').SourceOfTruth;

type Romaji = keyof SourceOfTruth;
type Hiragana = SourceOfTruth[Romaji]['hiragana']
type Katakana = SourceOfTruth[Romaji]['katakana']
type Kana = Hiragana | Katakana;

type KanaEntry = {
  hiragana: Hiragana;
  katakana: Katakana;
  obsolete?: boolean;
}

type KanaDict = Record<Romaji, KanaEntry>;

/** Object representing a singular kana within the syllabary */
type KanaItem = KanaEntry & {
  romaji: Romaji;
}

type GuessEntry = {
  correct: number;
  total: number;
}

type GuessDict = Record<Kana, GuessEntry>;


// QUIZ ACTIONS

type SkipAction = {
  type: 'skip';
  mode: QuizMode;
  kana: KanaItem;
}

type GuessAction = {
  type: 'guess';
  mode: QuizMode;
  kana: KanaItem;
  // String guessed by user (should be Romaji, but we don't know what the user will enter)
  guess: string;
}

type QuizAction = GuessAction | SkipAction;
