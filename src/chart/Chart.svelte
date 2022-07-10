<script lang="ts">
import { createEventDispatcher } from "svelte";
import { LAYOUT_MAIN } from "../layout";
import { KANA } from "../data";
import Tile from "./Tile.svelte";

  const dispatch = createEventDispatcher<{ select: KanaItem }>()
  export let mode: QuizMode;
  export let selected: KanaItem[];

  $: chart = LAYOUT_MAIN.map(row => row.map(id => (id !== null) ? { ...KANA[id], romaji: id } as KanaItem : null));
  $: selectedSet = new Set(selected.map(kana => kana.romaji));

  function onTileClick(kana: KanaItem | null) {
    if (kana)
      dispatch('select', kana);
  }
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
        <td class:selected={!!kana && selectedSet.has(kana.romaji)} >
          <Tile {kana} {mode} on:click={() => onTileClick(kana)}/>
        </td>
      {/each}
    </tr>
  {/each}
</table>

<style lang="scss">
  td {
    border: 1px solid transparent;

    &:hover {
      border: 1px solid lightgray;
    }
    &.selected {
      background-color: lightgreen;
    }
  }
</style>