<script>
    export let link
    export let image
    export let text
</script>

<a href={link} class="w-full cursor-pointer bg-white shad p-8 flex flex-col buble justify-between rounded-xl">
    <p class="text-center mb-8">{text}</p>
    <div class="h-32 overflow-hidden flex justify-center">
        <img class="h-full w-auto" src={image} alt="icon">
    </div>
</a>

<style>
    .shad {
        box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1);
    }

    .buble {
        @apply last-of-type:opacity-50 last:cursor-not-allowed;
    }
</style>