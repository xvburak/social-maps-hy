<script>
    import About from "$lib/components/About.svelte";
    import Functions from "$lib/components/Functions.svelte";
    import Download from "$lib/components/Download.svelte";
    import Principles from "$lib/components/Principles.svelte";
    import Logo from "$lib/components/Logo.svelte"
    import ScrollSection from "$lib/components/scrollspy/ScrollSection.svelte";
    import { activeSectionId } from '../stores';
    import Map from '../lib/components/map/Map.svelte'
	export let data
</script>
    <main class="bg-gray">
        <section class="w-[100svw] h-[100svh] bg-[#E7E5DF]">
            <Map/>
        </section>
        <section>
            <ScrollSection id="heroSection">
                <div class="min-h-screen flex items-center justify-center bg-cover bg-hero-pattern">
                    <Logo />
                </div>
            </ScrollSection>
        </section>
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
            <Download data={data.generals[0]} />
        </ScrollSection>
    </main>


{#if $activeSectionId === "heroSection"}
<!-- <div class="action p-2 bg-purple text-white  fixed text-xl flex flex-col justify-center z-[90]  bottom-0 w-full">  
    <div class="w-full">
        <a class="text-center block" href="#aboutSection">O aplikaci 👇</a>
    </div> 
</div> -->
{:else if $activeSectionId === "/"}
<div class="action p-2 bg-purple text-white  fixed text-xl flex flex-col justify-center z-[90]  bottom-0 w-full">  
    <div class="w-full">
        <a class="text-center block" href="#aboutSection">O aplikaci 👇</a>
    </div> 
</div>
{:else if $activeSectionId === "aboutSection"}
<div class="action p-2 bg-gray text-white  fixed text-xl flex flex-col justify-center z-[90]  bottom-0 w-full">  
    <div class="w-full">
        <a class="text-center block" href="#principlesSection">Základní principy aplikace 👇</a>
    </div> 
</div>
{:else if $activeSectionId === "principlesSection"}
<div class="action p-2 bg-yellow text-white  fixed text-xl flex flex-col justify-center z-[90]  bottom-0 w-full">  
    <div class="w-full">
        <a class="text-center block" href="#functionsSection">Hlavní funkce aplikace 👇</a>
    </div> 
</div>
{:else if $activeSectionId === "functionsSection"}
<div class="action p-2 bg-red text-white  fixed text-xl flex flex-col justify-center z-[90]  bottom-0 w-full">  
    <div class="w-full">
        <a class="text-center block" href="#downloadSection">Stáhnout 👇</a>
    </div> 
</div>
{/if}




<style>
    section {
        @apply overflow-scroll;
        position: sticky;
        position: -webkit-sticky;
        top:0;
        height: 100vh;
    }

    :global(html,body) {
        min-height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
</style>






