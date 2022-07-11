<script lang="ts">
  export let action: QuizAction;
</script>


{#if action.type === 'guess'}
  {#if action.guess === action.kana.romaji || action.kana.alias?.includes(action.guess)}
  <div class="info correct">
    You guessed correct! The romaji for {action.kana[action.mode]} is indeed {action.guess}.
  </div>
  {:else}
  <div class="info wrong">
    You guessed wrong... The romaji for {action.kana[action.mode]} is not "{action.guess}", it is {action.kana.romaji}.
  </div>
  {/if}
{:else if action.type === 'skip'}
  <div class="info other">
    You skipped {action.kana[action.mode]}. The correct answer was {action.kana.romaji}!
  </div>
{/if}


<style lang="scss">
  .info {
    padding: 1em;
    border-radius: 5px;

    &.correct {
      background-color: lightgreen;
      border: 3px solid green;
    }

    &.wrong {
      background-color: lightcoral;
      border: 3px solid darkred;
    }

    &.other {
      background-color: lightgray;
      border: 3px solid gray;
    }
  }
</style>
