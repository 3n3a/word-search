<script lang="ts">
    import type { PageData } from './$types';
  
    export let data: PageData;
</script>

<h1>{data.titlePrefix} <kbd class="kbd kbd-sm">{data.titleQuery}</kbd></h1>

<ul>
    {#each data.words as word}
        <li>{word.word}: {word.score}</li>
    {/each}
</ul>

<style>
    .code {
        border: 1px solid gray;
        border-radius: 4px;
        padding: 2px 8px;
    }
</style>