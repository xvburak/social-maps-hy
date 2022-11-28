<script>
    import { page } from '$app/stores';
    let locale = $page.url.pathname
    export let data
</script>




{#if locale.includes('/en')}
    {#each data as item}
    <div>
        <p><span>{item.emoji}</span>{item.titleEn}</p>
        <p>{item.textEn}</p>
    </div>
{/each}
{:else}
    {#each data as item}
    <div>
        <p><span>{item.emoji}</span>{item.titleCs}</p>
        <p>{item.textCs}</p>
    </div>
    {/each}
{/if} 