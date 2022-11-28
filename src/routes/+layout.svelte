<script>
    import "../app.css";
    import { page } from '$app/stores';
    let locale = $page.url.pathname

    function toEn() {
        const pageurl = new URL(location.href);
        pageurl.pathname = 'en' + pageurl.pathname;
        window.location.href = pageurl.pathname
    }

    function toCs() {
        const pageurl = new URL(location.href);
        pageurl.pathname =  pageurl.pathname.replace('/en', '');
        window.location.href = pageurl.pathname
    }
</script>

<div class="h-16 w-16 bg-white rounded-full justify-center flex items-center fixed top-4 md:top-8 top-4 md:left-8 z-50">
    {#if locale.includes('/en')}
        <button class="text-l" on:click={toCs}>🇨🇿</button>
    {:else}
        <button class="text-l" on:click={toEn}>🇬🇧</button>
    {/if}  
</div>


<slot />