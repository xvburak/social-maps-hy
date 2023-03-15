<script>
    import PrincipleItem from './PrincipleItem.svelte';
    import PrincipleItemEn from './PrincipleItemEn.svelte';

    import {
        page
    } from '$app/stores';
    let locale = $page.url.pathname
    export let data
    console.log(data)
</script>

<div class="bg-gray min-h-screen text-white pt-16 md:pt-28 p-4 md:p-8">
    <div class="pt-8 max-w-screen-2xl mx-auto">

            {#each data as item}
                {#if locale.includes('/en')}
                    <PrincipleItem emoji={item.emoji} title={item.titleEn} text={item.textEn.html} />
                {:else}
                    <PrincipleItem emoji={item.emoji} title={item.titleCs} text={item.textCs.html} />
                {/if}
            {/each}

    </div>
</div>