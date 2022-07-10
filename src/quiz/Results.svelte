<script lang="ts">
  export let history: QuizAction[];
</script>

<section>
  {#each history as action}
  <div>
    {action.type}
  </div>
  {/each}
</section>