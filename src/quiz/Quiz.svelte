<script lang="ts">
import Input from "./Input.svelte";

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
    next(action.type === 'guess' && action.guess !== action.kana[action.mode]);
  }

</script>

{#if !!current}
  <Input {mode} kana={current} on:action={onAction} />
{/if}

{#if !!queue?.length}
  <button on:click={() => next(false)}>Next</button>
{:else}
  The quiz has finished!
{/if}


