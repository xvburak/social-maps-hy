<script>
    export let emoji
    export let title
    export let text

    let isOpen = false
    const toggle = () => isOpen = !isOpen
</script>


<button class="bg-white mb-4 text-black w-full p-4 md:p-8 rounded-xl" on:click={toggle} aria-expanded={isOpen}>
    <div class="text-s md:text-m flex justify-between">
        <p class="text-left"><span class="mr-4">{emoji}</span>{title}</p>
        {#if isOpen}
                <p class="mb-0">↑</p>
        {:else}
                <p class="mb-0">↓</p>
        {/if}
    </div>
    
    <div class="text-gray subs w-full text-s text-left mt-4 md:mt-8" class:hidden={isOpen}>
        <p class="mb-0">{@html text.substring(0,240)}...</p>
    </div>

    <div class="text-gray text-s w-full text-left mt-4 md:mt-8" class:hidden={!isOpen}>
        <p class="mb-0">{@html text}</p>
    </div>

</button>


<style>
/* .subs {
    @apply inline-block
} */

/* .subs {
        @apply hidden
    }

@media (min-width: 768px) {
    .subs {
        @apply inline-block
    }
} */
        
</style>