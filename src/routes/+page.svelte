<script lang="ts">
	import SearchBox from "$components/SearchBox.svelte";
	import RangeStepped from "$components/RangeStepped.svelte";

    let numberOfLetters = 1;
</script>

<h1>Word Search</h1>

<p>Number of Letters: {numberOfLetters}</p>

<div class="search-row">
    {#each Array(numberOfLetters) as singleLetter}
        <SearchBox />
    {/each}
</div>

<RangeStepped bind:value={numberOfLetters} />