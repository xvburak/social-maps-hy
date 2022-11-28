<script>
    export let data

    import { createToggle } from "../../stores.js"
	const display = createToggle(false)

</script>

<button on:click={display.toggle}>Toggle</button>

{#if $display}
    <p>{data.textCs}</p>
{:else}
    <p>{data.textEn}</p>
{/if}
