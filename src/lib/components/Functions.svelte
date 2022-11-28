<script>
    import { page } from '$app/stores';
    let locale = $page.url.pathname
    export let data
</script>

{#if locale.includes('/en')}
    <p>{@html data.functionsInfo.textEn}</p>
{:else}
    <p>{@html data.functionsInfo.textCs}</p>
{/if} 

