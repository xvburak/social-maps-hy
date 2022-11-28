<script>
    import About from "$lib/components/About.svelte";
    import Functions from "$lib/components/Functions.svelte";
    import Download from "$lib/components/Download.svelte";
    import Principles from "$lib/components/Principles.svelte";

	export let data

</script>

<About data={data.generals[0]} />
<Principles data={data.generals[0].principles} />
<Functions />
<Download />

