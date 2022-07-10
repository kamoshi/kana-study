<script lang="ts">
  export let kana: KanaEntry | null;
  export let mode: QuizMode;
</script>


<div class="tile"
  class:empty={!kana}
  on:click>
  {#if kana}
    {#if mode === 'hiragana'}
      {kana.hiragana}
    {:else}
      {kana.katakana}
    {/if}
  {/if}
</div>

<style lang="scss">
  .empty {
    background-color: #e6e6e6;
  }
</style>
