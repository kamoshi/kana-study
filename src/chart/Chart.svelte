<script lang="ts">
import { MAIN, DIACRITICS, DIGRAPHS } from "../layout";
import Table from "./Table.svelte";

  export let mode: QuizMode;
  export let selected: Set<Romaji>;
</script>


<section>
  <div class="column">
    <Table {mode} {selected} layout={MAIN} on:select >
      <tr slot="header">
        <th>あ段</th>
        <th>い段</th>
        <th>う段</th>
        <th>え段</th>
        <th>お段</th>
      </tr>
    </Table>
    <Table {mode} {selected} layout={DIACRITICS} on:select >
      <tr slot="header">
        <th>あ段</th>
        <th>い段</th>
        <th>う段</th>
        <th>え段</th>
        <th>お段</th>
      </tr>
    </Table>
  </div>
  <div class="column">
    <Table {mode} {selected} layout={DIGRAPHS} on:select >
      <tr slot="header">
        <th>あ段</th>
        <th>う段</th>
        <th>お段</th>
      </tr>
    </Table>
  </div>
</section>


<style lang="scss">
  section {
    display: flex;

    .column:first-of-type {
      margin-right: 3em;
    }
  }
</style>