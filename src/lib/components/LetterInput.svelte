<script lang="ts">
    import _ from 'lodash'

    import SearchBox from "$components/SearchBox.svelte";

    export let numberOfLetters = 1;
    export let letters: string[] = [];

    function handleSearchBoxInit(event: CustomEvent) {
        const { index, value } = event.detail;
        letters[index] = value;
    }

    function handleSearchBoxDestroy(event: CustomEvent) {
        let { index, value } = event.detail;
        _.pullAt(letters, [index])
    }

    function handleLetterInput(event: CustomEvent) {
        let { index, } = event.detail;
        const nextIndex = index + 1;

        if (letters.length >= nextIndex + 1) {
            const newElement = document.getElementById(`input-search-${nextIndex.toFixed()}`)
            newElement?.focus();
        }
    }
</script>

<!-- <p>The Word:</p>
{#each Array(numberOfLetters) as _, index}
    <span>{letters[index] || '?'}</span>
{/each} -->

<div class="flex flex-row flex-wrap my-6 gap-2">
    {#each Array(numberOfLetters) as _, index}
        <SearchBox 
            on:created={handleSearchBoxInit} 
            on:destroyed={handleSearchBoxDestroy}
            on:has-letter={handleLetterInput}
            index={index}
            bind:value={letters[index]} 
        />
    {/each}
</div>
