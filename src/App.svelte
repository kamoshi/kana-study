<script lang="ts">
import Chart from "./chart/Chart.svelte";
import Quiz from "./quiz/Quiz.svelte";
import { KANA } from "./data";

	let state = 'select';
	let mode: QuizMode = 'hiragana';
	let selection = new Set<Romaji>();
	
	$: kana = Array.from(selection).map(romaji => ({ ...KANA[romaji], romaji } as KanaItem));

	function onSelect($event: CustomEvent<KanaItem>) {
		const romaji = $event.detail.romaji;
		const newSet = new Set(selection);
		newSet.has(romaji) ? newSet.delete(romaji) : newSet.add(romaji);
		selection = newSet;
	}

	function onStart() {
		state = 'quiz';
	}
</script>

<main>
	{#if state === 'select'}
		<Chart {mode} selected={kana} on:select={onSelect} />
		<button on:click={onStart}>Start</button>
	{:else if state === 'quiz'}
		<Quiz {mode} {kana} />
	{/if}
</main>

<style lang="scss">

</style>