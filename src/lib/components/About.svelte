<script>
    import { page } from '$app/stores';
    let locale = $page.url.pathname
    export let data
</script>


{#if locale.includes('/en')}
<div class="bg-purple min-h-screen text-white items-center flex flex-col md:flex-row md:space-x-4 pt-20 md:pt-4">
    <div class="copy py-4 px-4 md:px-8 w-full md:w-1/2 h-min">
        <p>{@html data.aboutOne.textEn}</p>
    </div>
    <div class="w-full md:w-1/2">
        <img class="" src={data.aboutOne.image.url} alt="mockup aplikace">
    </div>
    
</div>

<div class="bg-purple min-h-screen text-white items-center flex flex-col-reverse md:flex-row md:space-x-4 pt-20 md:pt-4">
    <div class="w-full md:w-1/2">
        <img class="" src={data.aboutOne.image.url} alt="mockup aplikace">
    </div>
    <div class="copy py-4 px-4 md:px-8 w-full md:w-1/2 h-min">
        <p>{@html data.aboutTwo.textEn}</p>
    </div>
</div>
{:else}
<div class="bg-purple min-h-screen text-white items-center flex flex-col md:flex-row md:space-x-4 pt-20 md:pt-4">
    <div class="copy py-4 px-4 md:px-8 w-full md:w-1/2 h-min">
        <p>{@html data.aboutOne.textCs}</p>
    </div>
    <div class="w-full md:w-1/2">
        <img class="" src={data.aboutOne.image.url} alt="mockup aplikace">
    </div>
    
</div>

<div class="bg-purple min-h-screen text-white items-center flex flex-col-reverse md:flex-row md:space-x-4 pt-20 md:pt-4">
    <div class="w-full md:w-1/2">
        <img class="" src={data.aboutOne.image.url} alt="mockup aplikace">
    </div>
    <div class="copy py-4 px-4 md:px-8 w-full md:w-1/2 h-min">
        <p>{@html data.aboutTwo.textCs}</p>
    </div>
</div>
{/if} 


<style>
    p {
        @apply text-s
    }
</style>