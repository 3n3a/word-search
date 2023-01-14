<script lang="ts">
    import { goto } from '$app/navigation';

	import SearchBox from "$components/SearchBox.svelte";
	import RangeStepped from "$components/RangeStepped.svelte";

    import _ from 'lodash'

    let numberOfLetters = 1;
    let letters: string[] = [];

    function getWord() {
        return letters.join("")
    }
    
    function handleSearchBoxInit(event: CustomEvent) {
        const { index, value } = event.detail;
        letters[index] = value;
    }

    function handleSearchBoxDestroy(event: CustomEvent) {
        let { index, value } = event.detail;
        _.pullAt(letters, [index])
    }

    function searchForWord(event: any) {
        const word = getWord()
        goto(`/search?q=${word}`)
    }
</script>

<h1>Word Search</h1>

<p>Number of Letters: {numberOfLetters}</p>
<p>The Word:</p>

{#each Array(numberOfLetters) as _, index}
    <span>{letters[index]}</span>
{/each}

<div class="search-row">
    {#each Array(numberOfLetters) as _, index}
        <SearchBox 
            on:created={handleSearchBoxInit} 
            on:destroyed={handleSearchBoxDestroy} 
            index={index}
            bind:value={letters[index]} 
        />
    {/each}
</div>

<RangeStepped bind:value={numberOfLetters} />

<button 
    on:click={searchForWord}
    class="btn btn-accent">
    Search
</button>