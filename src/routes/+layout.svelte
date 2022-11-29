<script>
    import "../app.css";
    import '@splidejs/svelte-splide/css/core';

    import Footer from "$lib/components/Footer.svelte";

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



<div class="shadow-xl menu p-4 bg-white text-m rounded-xl space-x-4 items-start justify-start flex fixed top-4 md:top-8 left-4 md:left-8 z-50">
<div class="">
    <p class="">🧭</p>
</div>
{#if locale.includes('/en')}
<div class="flex flex-col space-y-4">
    <div>    
        <a href="/">Homepage</a>
        <a href="#aboutSection">About</a>
        <a href="#principlesSection">Principles</a>
        <a href="#functionsSection">Functions</a>
        <a href="#downloadSection">Download</a>
    </div>
    <div>
        <a href="">Contact Us 📧</a>
        <a href="">Discord  🐽</a>
        <a href="">Support Us 💖</a>
    </div>

    <button class="inline-block text-left" on:click={toCs}>Česky 🇨🇿</button>
</div>
{:else}
<div class="flex flex-col space-y-4">
    <div>    
        <a href="/">Úvodní stránka</a>
        <a href="#aboutSection">O aplikaci</a>
        <a href="#principlesSection">Základní principy</a>
        <a href="#functionsSection">Hlavní funkce aplikace</a>
        <a href="#downloadSection">Stáhnout</a>
    </div>
    <div>
        <a href="">Napiš nám 📧</a>
        <a href="">Discord  🐽</a>
        <a href="">Podpoř nás 💖</a>
    </div>

    <button class="inline-block text-left" on:click={toEn}>English 🇬🇧</button>
</div>
{/if}  


</div>

<!-- <div class="shadow-xl h-16 p-4 bg-white rounded-full justify-center flex items-center fixed top-4 md:top-8 left-4 md:left-8 z-50">
    {#if locale.includes('/en')}
        <button class="text-m items-center" on:click={toCs}>🇨🇿 Česky</button>
    {:else}
        <button class="text-m items-center" on:click={toEn}>🇬🇧 English</button>
    {/if}  
</div> -->


<slot />

<Footer />

<style> 
.menu a{
    @apply block mb-2
}

</style>