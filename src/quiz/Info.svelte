<script lang="ts">
  export let action: QuizAction;
  
  $: kana = action.kana[action.mode];
</script>


{#if action.type === 'guess'}
  {#if action.guess === kana}
  <div class="info correct">
    You guessed correct! The kana for {action.kana.romaji} is indeed {kana}.
  </div>
  {:else}
  <div class="info wrong">
    You guessed wrong... The kana for {action.kana.romaji} is not "{action.guess}", it is {kana}.
  </div>
  {/if}
{:else if action.type === 'skip'}
  <div class="info other">
    You skipped {action.kana.romaji}. The correct answer was {kana}!
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
