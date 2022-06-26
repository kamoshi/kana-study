<script lang="ts">
  export let kana: KanaEntry | null;
  export let mode: ChartMode;
  
</script>

{#if kana}
  <div class="tile">
  {#if mode === 'hiragana'}
    {kana.hira}
  {:else if mode = 'katakana'}
    {kana.kata}
  {/if}
  </div>
{:else}
  <div class="tile empty">
    N/A
  </div>
{/if}

<style lang="scss">
  .empty {
    background-color: lightgray;
  }
</style>
