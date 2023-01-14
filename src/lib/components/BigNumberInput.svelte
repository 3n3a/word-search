<script lang="ts">
    export let value = 1;
</script>


<div class="flex flex-row">
    <input 
        type="number" 
        class="input text-4xl pr-0  h-20 input-bordered input-accent w-24" 
        min="1" 
        max="20" 
        bind:value={value} 
    />
    <p class="text-6xl py-2 px-4">Letters</p>
</div>