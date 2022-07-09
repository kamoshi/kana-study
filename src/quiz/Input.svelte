<script lang="ts">
  export let mode: DisplayMode;
  export let current: KanaItem;
  $: correct = current[mode];
  let input = '';

  function onCheck() {
    console.log(correct === input);
  }
</script>

<section class="card">
  <div class="bigger">
    {current.romaji}
  </div>
  <div>
    <label for="guess-input">Please enter text in {mode}</label>
    <input id="guess-input" type="text" bind:value={input}>
  </div>

  <button on:click={onCheck}>Check</button>
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