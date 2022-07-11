<script lang="ts">
import { onMount } from "svelte";
import { history, state } from "../state";
import Input from "./Input.svelte";

  export let mode: QuizMode;
  export let kana: KanaItem[];

  let queue = kana.sort(() => Math.random() - 0.5);

  function next(wrap: boolean) {
    console.log(wrap);
    const newQueue = [...queue];
    const current = newQueue.shift();
    queue = (wrap && current) ? [...newQueue, current] : newQueue;
  }

  function onAction($event: CustomEvent<QuizAction>) {
    const action = $event.detail;
    next(
      action.type === 'guess' &&
      (action.guess !== action.kana.romaji && !action.kana.alias?.includes(action.guess))
    );
    history.update(old => [...old, action]);

    if (queue.length === 0)
      state.set('results');
  }

  onMount(() => { if (!queue.length) state.set('results') })
</script>

{#if queue.length}
  <Input {mode} kana={queue[0]} on:action={onAction} />
{/if}


