<script lang="ts">
    import WordDisplay from '$components/WordDisplay.svelte';
import type { PageData } from './$types';
  
    export let data: PageData;
</script>

<div class="flex md:flex-row flex-col gap-2 justify-between content-center my-8">
    <a href="/" class="btn btn-accent">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>      
        Back
    </a>
    
    <div class="flex md:flex-row flex-wrap flex-col gap-4">
        <h2 class="subtitle">{data.titlePrefix}</h2>

        <div class="flex flex-row gap-1">
            {#each data.titleQuery.split("") as letter}
                <kbd class="kbd kbd-md">{letter}</kbd>
            {/each}
        </div>
    </div>

    <div></div>
</div>

<div class="flex flex-col gap-4 mb-16">
    {#each data.words as word}
        <WordDisplay
            value={word.word}
            score={word.score}
        />
    {/each}
</div>

