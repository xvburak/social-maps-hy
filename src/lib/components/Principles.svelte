<script>
    import PrincipleItem from './PrincipleItem.svelte';
    import {
        page
    } from '$app/stores';
    let locale = $page.url.pathname
    export let data
</script>

<div class="bg-gray min-h-screen text-white pt-28 p-8">
    <div class="pt-8">
        {#if locale.includes('/en')}
            {#each data as item}
                <div>
                    <p><span>{item.emoji}</span>{item.titleEn}</p>
                    <p>{item.textEn}</p>
                </div>
            {/each}
        {:else}
            {#each data as item}
                <div class="bg-white mb-4 text-black p-8 rounded-xl">
                    <p class="text-m mb-8"><span class="mr-4">{item.emoji}</span>{item.titleCs}</p>
                    <p class="text-s">{@html item.textCs}</p>
                </div>
            {/each}
        {/if} 
    </div>
</div>