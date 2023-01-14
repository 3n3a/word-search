<script lang="ts">
    import _ from 'lodash'
    import { goto } from '$app/navigation';

	import SearchBox from "$components/SearchBox.svelte";
	import RangeStepped from "$components/RangeStepped.svelte";
	import BigNumberInput from '$components/BigNumberInput.svelte';

    let isLoading = false;
    let numberOfLetters = 1;
    let letters: string[] = [];

    function getWord() {
        return letters.map(v => v || '?').join('')
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
        isLoading = true
        const word = getWord()
        goto(`/search?q=${word}`)
    }
</script>


<div class="section">
    <h2 class="subtitle">1. Word Length</h2>

    <div class="my-6">
        <BigNumberInput bind:value={numberOfLetters} />
    </div>
    
    <div class="my-8">
        <RangeStepped bind:value={numberOfLetters} />
    </div>
</div>
    

<div class="section">
    <h2 class="subtitle">2. Known Letters</h2>
    
    <!-- <p>The Word:</p>
    {#each Array(numberOfLetters) as _, index}
        <span>{letters[index] || '?'}</span>
    {/each} -->
    
    <div class="flex flex-row flex-wrap my-6 gap-2">
        {#each Array(numberOfLetters) as _, index}
            <SearchBox 
                on:created={handleSearchBoxInit} 
                on:destroyed={handleSearchBoxDestroy} 
                index={index}
                bind:value={letters[index]} 
            />
        {/each}
    </div>
</div>

<div class="section">
    <button 
        on:click={searchForWord}
        class="btn btn-accent btn-block"
        class:loading={isLoading}
    >
        Search
    </button>
</div>
