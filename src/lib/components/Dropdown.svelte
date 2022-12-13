<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    let locale = $page.url.pathname

    function toEn() {
        const pageurl = new URL(location.href);
        pageurl.pathname = 'en' + pageurl.pathname;
        window.location.href = pageurl.pathname
    }

    function toCs() {
        const pageurl = new URL(location.href);
        pageurl.pathname = pageurl.pathname.replace('/en', '');
        window.location.href = pageurl.pathname
    }

    let show = false; // menu state
    let menu = null; // menu wrapper DOM reference

    onMount(() => {

        const handleOutsideClick = (event) => {
            if (show && !menu.contains(event.target)) {
                show = false;
            } else if (show && menu.contains(event.target)) {
                show = false;
            }
        };

        const handleEscape = (event) => {
            if (show && event.key === 'Escape') {
                show = false;
            } 
        };

        // add events when element is added to the DOM
        document.addEventListener('click', handleOutsideClick, false);
        document.addEventListener('keyup', handleEscape, false);

        // remove events when element is removed from the DOM
        return () => {
            document.removeEventListener('click', handleOutsideClick, false);
            document.removeEventListener('keyup', handleEscape, false);
        };
    });


</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:mouseenter={()=> (show = !show)} on:mouseleave={()=> (show = !show)} bind:this={menu}
    class="shadow-xl cursor-pointer rounded-[2rem] menu p-4 bg-white text-m space-x-4 items-start justify-start flex fixed top-4 md:top-8 left-4 md:left-8 z-50">
    <div class="">
        <img class="h-8 w-8" src="/compass_animace.gif" alt="compass icon">
    </div>
    {#if show}
    {#if locale.includes('/en')}
    <div class="flex flex-col space-y-4">
        <div>    
            <a href="/en">Homepage</a>
            <a href="#aboutSection">About</a>
            <a href="#principlesSection">App Principles</a>
            <a href="#functionsSection">Main Functions</a>
            <a href="#downloadSection">Download</a>
        </div>
        <div>
            <a href="mailto:info@socialmaps.app">Contact Us 📧</a>
            <a href="https://discord.gg/NfPgKDy8Ww">Discord  🐽</a>
            <p class="opacity-50 cursor-not-allowed">Support Us 💖</p>
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
            <a href="mailto:info@socialmaps.app">Napiš nám 📧</a>
            <a href="https://discord.gg/NfPgKDy8Ww">Discord  🐽</a>
            <p class="opacity-50 cursor-not-allowed">Podpoř nás 💖</p>
        </div>
    
        <button class="inline-block text-left" on:click={toEn}>English 🇬🇧</button>
    </div>
    {/if}  
    {/if}
    
</div>


<style> 
    .menu a {
        @apply block mb-2 text-gray hover:text-black
    }

   .menu p {
        @apply block mb-2 text-gray
    }

    .menu button {
        @apply block mb-2 text-gray hover:text-black
    }
</style>