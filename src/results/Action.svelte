<script lang="ts">
  export let action: QuizAction;

  let good = (
    action.type === 'guess' &&
    (action.guess === action.kana.romaji || !!action.kana.alias?.includes(action.guess))
  );

  let options: string = [action.kana.romaji, ...(action.kana.alias || [])].join(' / ');
</script>

{#if action.type === 'skip'}
  <tr class="skip">
    <td>{action.kana[action.mode]}</td>
    <td><i>Skipped</i></td>
    <td>{options}</td>
  </tr>
{:else}
  <tr class="guess" class:right={good} class:wrong={!good} >
    <td>{action.kana[action.mode]}</td>
    <td>{action.guess}</td>
    <td>{options}</td>
  </tr>
{/if}

<style lang="scss">
  tr {
    td {
      padding: 0.25em;
    }
    &.skip {
      background-color: lightgray;
    }
    &.right {
      background-color: lightgreen;
    }
    &.wrong {
      background-color: lightcoral;
    }
  }
</style>
