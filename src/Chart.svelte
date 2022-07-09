<script lang="ts">
  import { LAYOUT_MAIN } from "./layout";
  import { KANA } from "./data";
  import Tile from "./Tile.svelte";

  export let mode: DisplayMode;

  $: chart = LAYOUT_MAIN.map(row => row.map(id => (id !== null) ? { ...KANA[id], romaji: id } as KanaItem : null));
  $: selected = new Set();
  
  function onTileClick(id?: Romaji) {
    if (!id)
      return;

    const newSet = new Set(selected);
    selected = (newSet.has(id))
      ? (newSet.delete(id), newSet)
      : (newSet.add(id), newSet);
  }
  
</script>

<div>
  {#each Array.from(selected) as lol}
    {lol}
  {/each}
</div>

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
          <Tile {kana} {mode} on:click={() => onTileClick(kana?.romaji)}/>
        </td>
      {/each}
    </tr>
  {/each}
</table>

<style lang="scss">
  .chart-main {
    border-collapse: collapse;
  }
</style>