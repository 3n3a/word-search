<script lang="ts">
	import { onMount, onDestroy } from "svelte";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();


    export let value: string = '';
    export let index: number;

    onMount(() => {
        dispatch('created', {
            index: index,
            value: value,
        });
    })

    onDestroy(() => {
        dispatch('destroyed', {
            index: index,
            value: value,
        });
    })

    function checkForLength(event: any) {
        const value = event.data?.valueOf() || '';

        if (value.length >= 1) {
            dispatch('has-letter', {
                index: index,
            });
        }
    }

    $: idString = `input-search-${index.toFixed()}`
</script>

<input type="text" id={idString} on:input={checkForLength} placeholder={index + 1} class="input px-3 text-center input-bordered input-accent w-11 max-w-xs" maxlength="1" bind:value={value} />
