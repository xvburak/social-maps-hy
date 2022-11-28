<script>
    import About from "$lib/components/About.svelte";
    import Functions from "$lib/components/Functions.svelte";
    import Download from "$lib/components/Download.svelte";
    import Principles from "$lib/components/Principles.svelte";

    import ScrollSection from "$lib/components/scrollspy/ScrollSection.svelte";
    import { activeSectionId } from '../../stores';

	export let data

</script>
<main>
    <ScrollSection id="heroSection">
        <div class="min-h-screen flex items-center justify-center bg-gray">
            <h1>🧭 Social Maps</h1>
        </div>
    </ScrollSection>
    
    <ScrollSection id="aboutSection">
        <About data={data.generals[0]} />
    </ScrollSection>
    
    <ScrollSection id="principlesSection">
        <Principles data={data.generals[0].principles} />
    </ScrollSection>

    <ScrollSection id="functionsSection">
        <Functions data={data.generals[0]} />
    </ScrollSection>

    <ScrollSection id="downloadSection">
        <Download />
    </ScrollSection>
</main>

<!-- {#if $activeSectionId === "heroSection"}
<div class="fixed top-0 right-0">  
    <div class="">
        <a class="" href="#aboutSection">O aplikaci 👇</a>
    </div> 
</div>
{:else if $activeSectionId === "aboutSection"}
<div class="fixed top-0 right-0">  
    <div class="">
        <a class="" href="#aboutSection">Základní principy aplikace👇</a>
    </div> 
</div>
{/if} -->




<style>
    :global(html,body) {
        min-height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    :global(main) {
        padding-bottom: 200px;
    }

</style>






