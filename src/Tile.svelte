<script lang="ts">
  export let kana: KanaEntry | null;
  export let mode: DisplayMode;
</script>


<div class="tile"
  class:empty={!kana}
  on:click>
  {#if !kana}
    N/A
  {:else}
    {#if mode === 'hiragana'}
      {kana.hiragana}
    {:else}
      {kana.katakana}
    {/if}
  {/if}
</div>

<style lang="scss">
  .empty {
    background-color: lightgray;
  }
</style>
