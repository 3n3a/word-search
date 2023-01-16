<script lang="ts">
    import { goto } from '$app/navigation';
	import LetterInput from '$lib/components/LetterInput.svelte';

	import NumberSliderInput from '$lib/components/NumberSliderInput.svelte';

    let isLoading = false;
    let numberOfLetters = 1;
    let letters: string[] = [];

    function getWord() {
        return letters.map(v => v || '?').join('')
    }
    
    function searchForWord(event: any) {
        isLoading = true
        const word = getWord()
        goto(`/search?q=${word}`)
    }
</script>


<div class="section">
    <h2 class="subtitle">1. Word Length</h2>

    <NumberSliderInput bind:numberOfLetters={numberOfLetters} />
</div>
    

<div class="section">
    <h2 class="subtitle">2. Known Letters</h2>
    
    <LetterInput bind:numberOfLetters={numberOfLetters} bind:letters={letters} />
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
