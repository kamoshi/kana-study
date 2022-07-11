import { writable, Writable } from "svelte/store";


export const state: Writable<AppState> = writable('select');
export const history: Writable<QuizAction[]> = writable([]);
