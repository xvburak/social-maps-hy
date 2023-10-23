<script>
    import "../app.css";
    import '@splidejs/svelte-splide/css/core';
    // import "@mapbox-gl/dist/mapbox-gl.css"
    import 'mapbox-gl/dist/mapbox-gl.css'

    import Footer from "$lib/components/Footer.svelte";
    import Dropdown from "$lib/components/Dropdown.svelte";

</script>

<Dropdown />
    <slot />
<Footer />
