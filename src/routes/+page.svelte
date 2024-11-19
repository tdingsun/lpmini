<script lang="ts">
import type { PageData } from "./$types";
import Plankton from "$lib/components/Plankton.svelte";
let { data } : { data: PageData } = $props();
let rows = data.sheet.values.slice(1);
</script>

<div class="flex gap-4 p-4">
    {#each rows as row}
    <Plankton {row}></Plankton>
{/each}
</div>
