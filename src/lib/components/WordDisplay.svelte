<script lang="ts">
    export let value: string;
    export let score: string;
</script>

<div class="card lg:card-side bg-slate-800 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">
        {value}
      </h2>
      <p class="text-right">Score: {score}</p>
    </div>
</div>