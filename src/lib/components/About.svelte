<script>
    import { page } from '$app/stores';
    let locale = $page.url.pathname
    export let data
</script>

{#if locale.includes('/en')}
    <p>{@html data.aboutOne.textEn}</p>
    <p>{@html data.aboutTwo.textEn}</p>
{:else}
    <p>{@html data.aboutOne.textCs}</p>
    <p>{@html data.aboutTwo.textCs}</p>
{/if} 

