<script>
    // import { Form, Input } from 'sveltejs-forms';
    import {
        page
    } from '$app/stores';
    let locale = $page.url.pathname
    export let data

    // function handleSubmit({detail: {values,setSubmitting}
    // }) {
    //     setTimeout(() => {
    //         setSubmitting(false);
    //         resetForm();
    //     }, 1000);
    // }
</script>

{#if locale.includes('/en')}
<div class="bg-red  text-white items-center flex py-20 md:py-28 p-4 md:p-8">
    <div class="copy py-4 px-4 md:px-8 w-full ">
        <p>{@html data.download.textEn}</p>
    </div>
</div>
<div class="text-center border p-4 md:p-16 px-8">
    <p class="">{@html data.newsletter.textEn}</p>
    <div class=" max-w-screen-sm mx-auto">
    <!-- <Form
        on:submit={handleSubmit}
        let:isSubmitting>
            {#if isSubmitting}
                <div class="bg-green border text-white flex flex-col justify-center text-center h-16 flex-1 rounded-full">
                    <p>Super, tvůj mail jsme přijali, díky!</p>
                </div>
            {:else}
            <div class="flex w-full space-x-4">
                <Input
                name="user.email"
                placeholder="user@example.com" 
                class="bg-offwhite border border-gray text-black text-center h-16 w-full rounded-full"/>
                <input class="bg-offwhite border border-gray text-black text-center h-16 flex-1 rounded-full" type="email" name="email" id="email" placeholder="email@email.com">
                <button type="submit" disabled={isSubmitting} class="border border-gray bg-offwhite hover:bg-green text-white flex-0 rounded-full w-16 h-16">🕊</button>
            </div>
            {/if}
        </Form> -->
    </div>
   
</div>
{:else}
<div class="bg-red  text-white items-center flex py-20 md:py-28 p-4 md:p-8">
    <div class="copy py-4 px-4 md:px-8 w-full ">
        <p>{@html data.download.textCs}</p>
    </div>
</div>
<div class="text-center border p-4 md:p-16 px-8">
    <p class="newsletter">{@html data.newsletter.textCs}</p>
    <div class=" max-w-screen-sm mx-auto">
    <!-- <Form
        on:submit={handleSubmit}
        let:isSubmitting>
            {#if isSubmitting}
                <div class="bg-green border text-white flex flex-col justify-center text-center h-16 flex-1 rounded-full">
                    <p>Super, tvůj mail jsme přijali, díky!</p>
                </div>
            {:else}
            <div class="flex w-full space-x-4">
                <Input
                name="user.email"
                placeholder="user@example.com" 
                class="bg-offwhite border border-gray text-black text-center h-16 w-full rounded-full"/>
                <input class="bg-offwhite border border-gray text-black text-center h-16 flex-1 rounded-full" type="email" name="email" id="email" placeholder="email@email.com">
                <button type="submit" disabled={isSubmitting} class="border border-gray bg-offwhite hover:bg-green text-white flex-0 rounded-full w-16 h-16">🕊</button>
            </div>
            {/if}
        </Form> -->
    </div>
   
</div>
{/if} 


<style>

:global(.field) {
    width: 100%;
    flex: 1 1 0%;
  }

    .copy {
        @apply text-center text-m leading-[1.22];
    }
    
    </style>