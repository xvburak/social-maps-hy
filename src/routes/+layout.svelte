<script>
    import "../app.css";
    import '@splidejs/svelte-splide/css/core';

    import Footer from "$lib/components/Footer.svelte";
    import Dropdown from "$lib/components/Dropdown.svelte";

</script>

<Dropdown />
<slot />
<Footer />
