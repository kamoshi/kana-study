<script lang="ts">
  export let kana: KanaEntry | null;
  export let mode: ChartMode;
  
</script>


<div class="tile" class:empty={!kana}>
  {#if !kana}
    N/A
  {:else}
    {#if mode === 'hiragana'}
      {kana.hira}
    {:else}
      {kana.kata}
    {/if}
  {/if}
</div>

<style lang="scss">
  .empty {
    background-color: lightgray;
  }
</style>
