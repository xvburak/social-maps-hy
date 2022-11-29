<script>
    export let image
    export let text
    export let title
</script>

<div class="bg-white h-full rounded-xl overflow-hidden">

    <div class="flex h-full justify-between flex-col lg:flex-row items-stretch">

      <div class="p-4 w-full lg:p-8 lg:w-1/2">
        <div class="text-m mb-4 lg:mb-8">{title}</div>
        <p class="text-xs xl:text-s text-gray">{text}</p>
      </div>

      <div class="w-full items-center flex lg:w-1/2">
        <img class="object-cover" src={image} alt="mockup">
      </div>

    </div>

</div>
