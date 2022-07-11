<script lang="ts">
import { state } from "../state";
import Action from "./Action.svelte";

  export let history: QuizAction[];
</script>

<section>
  <h2>History</h2>
  <table class="history-container">
    <thead>
      <th>Kana</th>
      <th>Your answer</th>
      <th>Correct answers</th>
    </thead>
    <tbody>
      {#each history as action}
        <Action {action} />
      {/each}
    </tbody>
  </table>
  <div class="buttons">
    <button on:click={() => state.set('select')}>Back</button>
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 1em;

    button {
      min-width: 5em;
    }
  }
</style>
