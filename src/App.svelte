<script lang="ts">
	import Chart from "./Chart.svelte";
	import Quiz from "./quiz/Quiz.svelte";
	
	let mock: KanaItem[] = [
		{
			romaji: 'a',
			hiragana: 'あ',
			katakana: 'ア',
		},
		{
			romaji: 'i',
			hiragana: 'い',
			katakana: 'イ',
		},
		{
			romaji: 'u',
			hiragana: 'う',
			katakana: 'ウ',
		},
		{
			romaji: 'e',
			hiragana: 'え',
			katakana: 'エ',
		},
		{
			romaji: 'o',
			hiragana: 'お',
			katakana: 'オ',
		}
	]
</script>

<main>
	<!-- <Chart mode={'hiragana'} /> -->
	<Quiz kana={mock} mode={'hiragana'}/>
</main>

<style lang="scss">

</style>