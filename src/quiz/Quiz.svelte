<script lang="ts">
import { onMount } from "svelte";
import { history, state } from "../state";
import Input from "./Input.svelte";

  export let mode: QuizMode;
  export let kana: KanaItem[];

  let queue = kana.sort(() => Math.random() - 0.5);
  let current: KanaItem | undefined;

  function next(wrap: boolean) {
    const newQueue = [...queue];
    current = newQueue.shift();
    queue = (wrap && current) ? [...newQueue, current] : newQueue;
  }

  function onAction($event: CustomEvent<QuizAction>) {
    const action = $event.detail;
    next(action.type === 'guess' && action.guess !== action.kana.romaji);
    history.update(old => [...old, action]);

    if (queue.length === 0 && current === undefined)
      state.set('results');
  }

  onMount(() => { (!!queue.length) ? next(false) : state.set('results') })
</script>

{#if !!current}
  <Input {mode} kana={current} on:action={onAction} />
{/if}


