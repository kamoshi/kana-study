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
  <button on:click={() => state.set('select')}>Back</button>
</section>

<style lang="scss">

</style>
