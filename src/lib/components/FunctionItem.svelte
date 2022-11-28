<script>
    export let image
    export let text
    export let title
</script>

<!-- <div class="p-6 rounded-xl h-full absolute flex flex-col lg:flex-row w-full z-40">
    <div class="w-1/2 lg:w-full">
        <h2 class="mb-6 text-m">{title}</h2>
        <p class="text-gray text-xs">{text}</p>
    </div>
    <div class=" bg-red w-1/2 lg:w-full">
        <img class=" object-contain" src="{image}" alt="mockup">
    </div>
</div> -->

<div class="bg-white rounded-xl overflow-hidden">

    <div class="md:flex">

      <div class="p-4 md:p-8 w-full md:w-1/2">
        <div class="text-m mb-4 md:mb-8">{title}</div>
        <p class="text-xs">{text}</p>
      </div>

      <div class="md:shrink-0 w-full md:w-1/2">
        <img class="h-52 w-full object-cover" src={image} alt="mockup">
      </div>

    </div>
</div>
