<script>
    function toEn() {
        const pageurl = new URL(location.href);
        pageurl.pathname = 'en' + pageurl.pathname;
        window.location.href = pageurl.pathname
    }

    function toCs() {
        const pageurl = new URL(location.href);
        pageurl.pathname =  pageurl.pathname.replace('en/', '');
        window.location.href = pageurl.pathname
        // console.log(pageurl.pathname)
    }
</script>

<button on:click={toEn}>🇬🇧</button>
<button on:click={toCs}>🇨🇿</button>
