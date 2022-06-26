<script lang="ts">
  import { LAYOUT_MAIN } from "./layout";
  import { KANA } from "./data";
  import Tile from "./Tile.svelte";

  export let mode: ChartMode;

  $: chart = LAYOUT_MAIN.map(row => row.map(id => (id !== null) ? KANA[id] : null));
  
</script>

<table class="chart-main">
  <tr>
    <th>あ段</th>
    <th>い段</th>
    <th>う段</th>
    <th>え段</th>
    <th>お段</th>
  </tr>
  {#each chart as row}
    <tr>
      {#each row as kana}
        <td>
          <Tile {kana} {mode} />
        </td>
      {/each}
    </tr>
  {/each}
</table>

<style lang="scss">
</style>