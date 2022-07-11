<script lang="ts">
import { createEventDispatcher } from "svelte";
import { KANA } from "../data";

  const dispatch = createEventDispatcher<{ select: KanaItem }>();
  export let mode: QuizMode;
  export let layout: Layout;
  export let selected: Set<Romaji>;

  let grid = layout.map(row => row.map(id => (id !== null) ? { ...KANA[id], romaji: id } as KanaItem : null));
</script>

<table>
  <slot name="header"/>
  <tbody>
    {#each grid as row}
      <tr>
        {#each row as kana}
          {#if kana}
            <td class:selected={selected.has(kana.romaji)} >
              <div on:click={() => dispatch('select', kana)}>
                {#if mode === 'hiragana'}
                  {kana.hiragana}
                {:else}
                  {kana.katakana}
                {/if}
              </div>
            </td>
          {:else}
            <td></td>
          {/if}
        {/each}
      </tr>
    {/each}
  </tbody>
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
