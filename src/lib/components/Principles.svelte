<script>
    import PrincipleItem from './PrincipleItem.svelte';
    import {
        page
    } from '$app/stores';
    let locale = $page.url.pathname
    export let data
</script>

<div class="bg-gray min-h-screen text-white pt-28 p-4 md:p-8">
    <div class="pt-4 md:pt-8 max-w-screen-xl mx-auto">
        {#if locale.includes('/en')}
            {#each data as item}
            <PrincipleItem emoji={item.emoji} title={item.titleEn} text={item.textEn} />

            {/each}
        {:else}
            {#each data as item}
                <PrincipleItem emoji={item.emoji} title={item.titleCs} text={item.textCs} />
            {/each}
        {/if} 
    </div>
</div>