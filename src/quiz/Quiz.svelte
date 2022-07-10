<script lang="ts">
import { onMount } from "svelte";
import Input from "./Input.svelte";
import Results from "./Results.svelte";

  export let mode: QuizMode;
  export let kana: KanaItem[];

  let queue = kana.sort(() => Math.random() - 0.5);
  let current: KanaItem | undefined;
  let history: QuizAction[] = [];

  function next(wrap: boolean) {
    const newQueue = [...queue];
    current = newQueue.shift();
    queue = (wrap && current) ? [...newQueue, current] : newQueue;
  }

  function onAction($event: CustomEvent<QuizAction>) {
    if (!current)
      return console.error(`Current kana is ${current}`);
    const action = $event.detail;
    history = [...history, action];
    next(action.type === 'guess' && action.guess !== action.kana.romaji);
  }

  onMount(() => {
    if (!current) next(false);
  })
</script>

{#if !!current}
  <Input {mode} kana={current} on:action={onAction} />
{:else}
  <Results {history} />
{/if}


