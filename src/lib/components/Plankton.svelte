<script lang="ts">
    let { row } = $props();
</script>

<div class="border bg-slate-300 text-center rounded-full p-4">
    <p>{row[1]}</p>
    <p>{row[2]} by {row[3]}</p>
    <p class="italic">{row[5]}</p>
</div>