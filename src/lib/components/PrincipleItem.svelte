<script>
    export let emoji
    export let title
    export let text

    let isOpen = false
    const toggle = () => isOpen = !isOpen
</script>


<button class="bg-white mb-4 text-black w-full p-4 md:p-8 rounded-xl" on:click={toggle} aria-expanded={isOpen}>
    <div class="text-s md:text-m flex justify-between items-center">
        <p class="text-left"><span class="mr-4">{emoji}</span>{title}</p>
        {#if isOpen}
        <div class="h-6 md:h-8">
            <svg class="h-full" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M51.5668 9.14002C52.1526 9.72581 52.1526 10.6756 51.5668 11.2613L11.2617 51.5664C10.6759 52.1522 9.72616 52.1522 9.14037 51.5664C8.55459 50.9806 8.55459 50.0309 9.14037 49.4451L49.4455 9.14002C50.0312 8.55424 50.981 8.55424 51.5668 9.14002Z" fill="#BDBDBD"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M50.8597 51.5668C50.2739 52.1526 49.3242 52.1526 48.7384 51.5668L8.43333 11.2617C7.84754 10.6759 7.84754 9.72616 8.43333 9.14037C9.01912 8.55459 9.96886 8.55459 10.5547 9.14037L50.8597 49.4455C51.4455 50.0312 51.4455 50.981 50.8597 51.5668Z" fill="#BDBDBD"/>
            </svg>
        </div>
        {:else}
        <div class="h-6 md:h-8">
            <svg class="h-full" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 -9.83506e-08C31.3284 -4.40331e-08 32 0.671573 32 1.5L32 58.5C32 59.3284 31.3284 60 30.5 60C29.6716 60 29 59.3284 29 58.5L29 1.5C29 0.671573 29.6716 -1.52668e-07 30.5 -9.83506e-08Z" fill="#BDBDBD"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M60 30.5C60 31.3284 59.3284 32 58.5 32L1.5 32C0.671574 32 5.87108e-08 31.3284 1.31134e-07 30.5C2.03558e-07 29.6716 0.671574 29 1.5 29L58.5 29C59.3284 29 60 29.6716 60 30.5Z" fill="#BDBDBD"/>
            </svg>
        </div>
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