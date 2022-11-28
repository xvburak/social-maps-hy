<script>
    import "../app.css";

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

<div class="h-16 w-16 bg-green rounded-full fixed top-8 left-8 z-50">

</div>
<button on:click={toEn}>🇬🇧</button>
<button on:click={toCs}>🇨🇿</button>

<slot />