<script lang="ts">
import { createEventDispatcher } from "svelte";
import Info from "./Info.svelte";

  const dispatch = createEventDispatcher<{ action: QuizAction }>();
  export let mode: QuizMode;
  export let kana: KanaItem;
  
  let input = '';
  let lastAction: QuizAction | undefined;

  function onCheck() {
    const action: GuessAction = { type: 'guess', kana, mode, guess: input };
    lastAction = { ...action };
    dispatch('action', action);
  }

  function onSkip() {
    const action: SkipAction = { type: 'skip', kana, mode };
    lastAction = { ...action };
    dispatch('action', action);
  }
</script>

<section class="card">
  {#if !!lastAction}
    <Info action={lastAction} />
  {/if}

  <div class="bigger">
    {kana.romaji}
  </div>
  <div>
    <label for="guess-input">Please enter text in {mode}</label>
    <input id="guess-input" type="text" bind:value={input}>
  </div>

  <button on:click={onCheck}>Check</button>
  <button on:click={onSkip}>Skip</button>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    padding: 1em;
  }
  .bigger {
    font-size: 3em;
  }
</style>