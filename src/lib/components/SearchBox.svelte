<script lang="ts">
	import { onMount, onDestroy } from "svelte";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();


    export let value: string = '?';
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
</script>

<input type="text" class="input input-bordered input-accent w-11 max-w-xs" maxlength="1" bind:value={value} />
