<script lang="ts">
import Chart from "./chart/Chart.svelte";
import Quiz from "./quiz/Quiz.svelte";
import { KANA } from "./data";
import Results from "./results/Results.svelte";
import { history, state } from "./state";
import { onDestroy, onMount } from "svelte";
import { storage } from "./storage";

	let currentState: AppState = 'select';
	let currentHistory: QuizAction[] = [];
	let mode: QuizMode = 'hiragana';
	let selected = new Set<Romaji>();
	
	$: kana = Array.from(selected).map(romaji => ({ ...KANA[romaji], romaji } as KanaItem));

	function onSelect($event: CustomEvent<KanaItem>) {
		const romaji = $event.detail.romaji;
		const newSet = new Set(selected);
		newSet.has(romaji) ? newSet.delete(romaji) : newSet.add(romaji);
		storage.saveSelected((selected = newSet, selected));
	}

	function onStart() {
		history.set([]);
		state.set('quiz');
	}

	onMount(() => {
		selected = storage.loadSelected();
	})

	const unsubState = state.subscribe(newState => currentState = newState);
	const unsubHistory = history.subscribe(newHistory => currentHistory = newHistory);
	onDestroy(() => (unsubState(), unsubHistory()))
</script>

<div>
	{#if currentState === 'select'}
		<Chart {mode} {selected} on:select={onSelect} />
		<div class="buttons">
			<button on:click={() => mode = (mode === 'hiragana') ? 'katakana' : 'hiragana'}>Change syllabary</button>
			<button on:click={onStart}>Start</button>
		</div>
	{:else if currentState === 'quiz'}
		<Quiz {mode} {kana} />
	{:else if currentState === 'results'}
		<Results history={currentHistory} />
	{/if}
</div>

<style lang="scss">
	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;

		button {
			min-width: 5em;
			margin-left: 0.25em;
			margin-right: 0.25em;
		}
	}
</style>