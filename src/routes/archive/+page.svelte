<script>
    import About from "$lib/components/About.svelte";
    import Functions from "$lib/components/Functions.svelte";
    import Download from "$lib/components/Download.svelte";
    import Principles from "$lib/components/Principles.svelte";
    import Logo from "$lib/components/Logo.svelte"

    import ScrollSection from "$lib/components/scrollspy/ScrollSection.svelte";
    import { activeSectionId } from '../../stores';

	export let data

</script>

<section class="bg-gray">
    <ScrollSection id="heroSection">
        <div class="min-h-screen flex items-center justify-center bg-cover bg-hero-pattern">
            <Logo />
        </div>
    </ScrollSection>
</section>

<section class="bg-purple">
    <ScrollSection id="aboutSection">
        <div class="bg-purple min-h-screen sec text-white items-center flex flex-col md:flex-row md:space-x-4 pt-20 md:pt-4">
            <div class="copy py-4 px-4 md:px-8 w-full md:w-1/2 h-min">
                <p>{@html data.generals[0].aboutOne.textCs}</p>
            </div>
            <div class="w-full md:w-1/2">
                <img class="" src={data.generals[0].aboutOne.image.url} alt="mockup aplikace">
            </div>
        </div>
    </ScrollSection>
</section>

<section class="bg-purple">
    <ScrollSection >
        <div class="bg-purple min-h-screen sec text-white items-center flex flex-col-reverse md:flex-row md:space-x-4 pt-20 md:pt-4">
            <div class="copy py-4 px-4 md:px-8 w-full md:w-1/2 h-min">
                <p>{@html data.generals[0].aboutTwo.textCs}</p>
            </div>
            <div class="w-full md:w-1/2">
                <img class="" src={data.generals[0].aboutTwo.image.url} alt="mockup aplikace">
            </div>
        
        </div>
    </ScrollSection>
</section>

<section class="bg-gray">
    <ScrollSection id="principlesSection">
        <Principles data={data.generals[0].principles} />
    </ScrollSection>
</section>

<section class="bg-yellow">
    <ScrollSection id="functionsSection">
        <Functions data={data.generals[0]} />
    </ScrollSection>

</section>

<section class="">
    <ScrollSection id="downloadSection">
        <Download data={data.generals[0]} />
    </ScrollSection>
</section>

<!-- <main class="bg-gray">
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


 -->

 {#if $activeSectionId === "heroSection"}
<div class="action p-2 bg-purple text-white  fixed text-xl flex flex-col justify-center z-[90]  bottom-0 w-full">  
    <div class="w-full">
        <a class="text-center block" href="#aboutSection">O aplikaci 👇</a>
    </div> 
</div>
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
        scroll-behavior: smooth;
    }
</style>






