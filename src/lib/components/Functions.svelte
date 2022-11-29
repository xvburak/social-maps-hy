<script>
    import { page } from '$app/stores';
    let locale = $page.url.pathname
    export let data
    // console.log(data)

    import {
        Splide,
        SplideSlide
    } from '@splidejs/svelte-splide';
    import {
        loop
    } from 'svelte/internal';

	import FunctionItem from './FunctionItem.svelte';

    const options = {
        pagination: false,
        isNavigation: true,
        slideFocus: true,
        arrows: false,
        type: 'loop',
        padding: '12%',
        rewind: true,
        focus: 'center',
        perPage: 1,
        gap: '1rem',
        height: '70vh',
        breakpoints: {
            767: {
                height: '90vh',
            },
        },
    }
</script>

{#if locale.includes('/en')}
<div class="bg-yellow min-h-screen text-white items-center flex">
    <div class="copy py-4 px-4 md:px-8 w-full">
        <p>{@html data.functionsInfo.textEn}</p>
    </div>

</div>
{:else}
<div class="bg-yellow min-h-screen text-white items-center flex">
    <div class="copy py-4 px-4 md:px-8 w-full ">
        <p>{@html data.functionsInfo.textCs}</p>
    </div>

</div>
{/if} 


    {#if locale.includes('/en')}
    <div class="bg-yellow min-h-screen text-white w-full">
        <div class="pt-24 pb-16 h-full ">
            <div class="h-full flex flex-col text-black justify-center">
                <Splide  options={ options } aria-label="My Favorite Images">
                    {#each data.function as item}
                        <SplideSlide class="bg-white rounded-xl">
                            <FunctionItem text={item.textEn} title={item.titleEn} image={item.image.url} />
                        </SplideSlide>
                    {/each}
                </Splide>
            </div>
        </div>
    </div>
    {:else}
    <div class="bg-yellow min-h-screen text-white w-full">
        <div class="pt-24 pb-16 h-full ">
            <div class="h-full flex flex-col text-black justify-center">
                <Splide  options={ options } aria-label="My Favorite Images">
                    {#each data.function as item}
                        <SplideSlide class="bg-white rounded-xl">
                            <FunctionItem text={item.textCs} title={item.titleCs} image={item.image.url} />
                        </SplideSlide>
                    {/each}
                </Splide>
            </div>
        </div>
    </div>
    {/if}






<style>

.copy {
    @apply text-center text-m leading-[1.22];
}

</style>