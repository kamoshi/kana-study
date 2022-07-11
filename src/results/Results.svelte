<script lang="ts">
import { state } from "../state";

  export let history: QuizAction[];
</script>

<section>
  <h2>History</h2>
  <div>
    {#each history as action}
    <div>
      <span>{action.kana[action.mode]}</span>
      {#if action.type === 'guess'}
        <span>{action.guess}</span>
      {:else if action.type === 'skip'}
        <span>SKIPPED</span>
      {/if}
      <span>{action.kana.romaji}</span>
    </div>
    {/each}
  </div>
  <button on:click={() => state.set('select')}>Back</button>
</section>