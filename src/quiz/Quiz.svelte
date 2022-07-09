<script lang="ts">
  import Input from "./Input.svelte";

  export let mode: DisplayMode;
  export let kana: KanaItem[];

  let queue = kana.sort(() => Math.random() - 0.5);
  let current: KanaItem | undefined;

  function onNext() {
    const newQueue = [...queue];
    current = newQueue.shift();
    queue = newQueue;
  }

</script>

{#if !!current}
  <Input {mode} {current} />
{/if}

{#if !!queue?.length}
  <button on:click={onNext}>Next</button>
{:else}
  The quiz has finished!
{/if}


