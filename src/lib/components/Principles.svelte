<script>
    import PrincipleItem from './PrincipleItem.svelte';
    import {
        page
    } from '$app/stores';
    let locale = $page.url.pathname
    export let data
    // console.log(data[0].textTest)
</script>

<div class="bg-gray min-h-screen text-white pt-16 md:pt-28 p-4 md:p-8">
    <div class="pt-8 max-w-screen-2xl mx-auto">
        {#if locale.includes('/en')}
            {#each data as item}
            <PrincipleItem emoji={item.emoji} title={item.titleEn} text={item.textEn.html} textshort={item.textEn.text} />

            {/each}
        {:else}
            {#each data as item}
                    <PrincipleItem emoji={item.emoji} title={item.titleCs} text={item.textCs.html} textshort={item.textCs.text} />
            {/each}
        {/if} 
    </div>
</div>