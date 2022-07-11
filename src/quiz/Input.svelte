<script lang="ts">
import { createEventDispatcher } from "svelte";
import Info from "./Info.svelte";

  const dispatch = createEventDispatcher<{ action: QuizAction }>();
  export let mode: QuizMode;
  export let kana: KanaItem;
  $: target = kana[mode];

  let input = '';
  let lastAction: QuizAction | undefined;

  function onCheck() {
    if (input.length === 0) return;
    const action: GuessAction = { type: 'guess', kana, mode, guess: input };
    [input, lastAction] = ['', action];
    dispatch('action', action);
  }

  function onSkip() {
    const action: SkipAction = { type: 'skip', kana, mode };
    [input, lastAction] = ['', action];
    dispatch('action', action);
  }
</script>


<form class="card" on:submit|preventDefault={onCheck}>
  {#if !!lastAction}
    <Info action={lastAction} />
  {/if}

  <div class="bigger">
    {target}
  </div>
  <div class="input-field">
    <label for="guess-input">Please enter the romaji below</label>
    <input id="guess-input" type="text" autocomplete="off" bind:value={input}>
  </div>

  <div class="buttons">
    <button type="button" on:click={onSkip}>Skip</button>
    <button type="submit" on:click={onCheck}>Check</button>
  </div>
</form>


<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;

    .bigger {
      margin: 1em;
      font-size: 5em;
      line-height: 1em;
    }

    .input-field {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1em;

      label {
        margin-bottom: 0.5em;
      }
    }

    button {
      min-width: 5em;
    }
  }
</style>