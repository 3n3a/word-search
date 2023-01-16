<script lang="ts">
	import BigNumberInput from "./BigNumberInput.svelte";
	import RangeStepped from "./RangeStepped.svelte";

    export let numberOfLetters = 1;
</script>

<div class="my-6">
    <BigNumberInput bind:value={numberOfLetters} />
</div>

<div class="my-8">
    <RangeStepped bind:value={numberOfLetters} />
</div>