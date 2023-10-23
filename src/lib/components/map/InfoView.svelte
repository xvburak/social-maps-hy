<script>
	import { selectedItem, selectItem, geoJson } from './mapHelpers'
	import CloseIcon from './CloseIcon.svelte'
	import ExtendIcon from './ExtendIcon.svelte'
	import { marked } from 'marked'

	let contentArea
	let contentAreaScroll = 0
	let isViewExtended = false
</script>


<div class="{$selectedItem ? 'max-md:translate-y-0 md:translate-x-0' : 'max-md:translate-y-full md:translate-x-full' } {isViewExtended ? 'max-md:h-[100svh]' : 'max-md:h-[50vh]'} z-[500] transition-[transform,height] text-[#000000] ease-in-out absolute p-5 max-md:bottom-0 max-md:inset-x-0 md:inset-y-0 md:right-0 md:w-[660px]">
	<div class="bg-white relative rounded-xl overflow-hidden h-full shadow-xl">
		{#if $selectedItem}
		<div class="relative h-full grid grid-rows-[auto,1fr]">
			<div class="px-5 py-3 md:py-5 flex place-content-between {contentAreaScroll > 0 ? 'border-b border-b-[#E5E7EB]' : ''} items-center">
				{#if $selectedItem.properties.name}
					<h2 class="[font-size:1.5rem] font-semibold">{$selectedItem.properties.name}</h2>
					<div class="flex place-items-center max-md:space-x-5">
						<button class="md:hidden" on:click={() => isViewExtended = !isViewExtended}>
							<div class="{isViewExtended ? 'rotate-180' : ''} transition-transform ease-in-out"><ExtendIcon /></div>
						</button>
						<button class="" on:click={() => selectItem(null)}><CloseIcon /></button>
					</div>
				{/if}
			</div>
			<div bind:this={contentArea} on:scroll={()=> contentAreaScroll = contentArea.scrollTop} class="overflow-y-scroll flex flex-col place-content-between">
				<div class="p-5 pt-0">
					{#if $selectedItem.properties.description}
						<div class="prose">
							{@html marked.parse($selectedItem.properties.description)}
						</div>
					{/if}

					{#if $selectedItem.properties.gx_media_links}
					{@const images = $selectedItem.properties.gx_media_links.split(' ')}
					<div class="gallery pt-5 flex flex-col space-y-5">
						{#each images as image}
							<img class="border-none" src={image} alt="" srcset="">
						{/each}
					</div>
					{/if}

				</div>

			<div>
				<div class="grid md:grid-cols-2 p-5">
					{#if $selectedItem.properties.address}
						<div class="pt-5 pr-5">
							<span class="font-semibold">Adresa:</span><br>
							<span>{$selectedItem.properties.address}</span>
						</div>
					{/if}
					{#if $selectedItem.properties.author}
						<div class="pt-5">
							<span class="font-semibold">Autor:</span><br>
							<span>{$selectedItem.properties.author}</span>
						</div>
					{/if}
				</div>
				<div class="grid md:grid-cols-2 border-[#E5E7EB] border-t gap-px bg-[#E5E7EB]">
					{#if $geoJson.features[$selectedItem.id-1]}
						{@const prevItem = $geoJson.features[$selectedItem.id-1]}
						<button class="px-5 py-3 md:py-5 bg-white md:flex md:place-content-between hover:bg-[#F3F4F6]" on:click={() =>  {selectItem(prevItem); contentArea.scrollTop = 0 }}><span class="mr-1">←</span><span class="">{prevItem.properties.name}</span></button>
					{:else}
						<div class="bg-white"></div>
					{/if}
					{#if $geoJson.features[$selectedItem.id+1]}
						{@const nextItem = $geoJson.features[$selectedItem.id+1]}
						<button class="px-5 py-3 md:py-5 bg-white md:place-content-between md:flex hover:bg-[#F3F4F6]" on:click={() =>  {selectItem(nextItem); contentArea.scrollTop = 0 }}><span class="">{nextItem.properties.name}</span><span class="ml-1">→</span></button>
					{:else}
						<div class="bg-white"></div>
					{/if}
				</div> 
			</div>

			</div>
		</div>
		{/if}
	</div>
</div>
