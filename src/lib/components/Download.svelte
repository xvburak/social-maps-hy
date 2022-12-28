<script>
    import {
        fly,
        fade
    } from 'svelte/transition';
    import sheetdb from 'sheetdb-node';
    var config = {
        address: 'https://sheetdb.io/api/v1/upbcth8vfzeie',
    };

    var client = sheetdb(config);
    let hasError = false;
    let submitted = false;
    let isSuccessVisible = false;
    const errMessage = "All the fields are mandatory";

    function handleSubmit(emailInput) {
        isSuccessVisible = true;
        client.create({ email: emailInput })
            .then(function(data) {
            console.log(data);
        }, function(err){
            console.log(err);
        });

        setTimeout(function () {
            isSuccessVisible = false;
        }, 4000);
    }


 

    let emailInput = '';


    // import { Form, Input } from 'sveltejs-forms';
    import DownloadItem from './DownloadItem.svelte';
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
<div class="text-center  p-4 pb-4 md:pt-8 px-8">
    <p class="newsletter">{@html data.newsletter.textCs}</p>
    <div class=" max-w-screen-sm mx-auto">
        <div class="py-8">
                
            <!-- Email input         -->
            {#if hasError == true}
                <p class="error-alert">{errMessage}</p>
            {:else}
                {#if isSuccessVisible}	
                    
                        <div class="error-alert container w-full" transition:fade={{duration:150}}>
                            <div class="form-group bg-green rounded-full p-4">
                                <p class="text-white text-center w-full h-full">✓ Great, your email adress has been accepted!</p>
                            </div>
                        </div>
                {/if}
            {/if}

            <div class:hidden={isSuccessVisible} class="container w-full ">
                <form id="surveyForm" class="  flex space-x-4" class:submitted on:submit|preventDefault={handleSubmit(emailInput)}>
                    <div class="form-group flex-1 ">
                        <input type="email" class="form-control active:border-none p-4 text-center bg-offwhite w-full h-full rounded-full " placeholder="Your email adress" bind:value={emailInput} required>
                    </div>
                    <button class="btn btn-full text-m hover:bg-green h-16 w-16 bg-offwhite rounded-full" on:click={() => submitted = true}>🕊</button>
                </form>
            </div>

    </div>
        

    </div>
   
</div>
<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-8 px-8">
    <DownloadItem link="mailto:info@socialmaps.app" text={data.email.textEn} image={data.email.image.url}  />
    <DownloadItem link="https://discord.gg/NfPgKDy8Ww" text={data.discord.textEn} image={data.discord.image.url} />
    <a onclick="return false" href="/" class="w-full cursor-pointer bg-white shad p-8 flex flex-col buble justify-between rounded-xl">
        <p class="text-center mb-8">{data.support.textEn}</p>
        <div class="h-32 overflow-hidden flex justify-center">
            <img class="h-full w-auto" src={data.support.image.url} alt="icon">
        </div>
    </a></div>
{:else}
<div class="bg-red  text-white items-center flex py-20 md:py-28 p-4 md:p-8">
    <div class="copy py-4 px-4 md:px-8 w-full ">
        <p>{@html data.download.textCs}</p>
    </div>
</div>
<div class="text-center  p-4 pb-4 md:pt-8 px-8">
    <p class="newsletter">{@html data.newsletter.textCs}</p>
    <div class=" max-w-screen-sm mx-auto">
        <div class="py-8">
                
                <!-- Email input         -->
                {#if hasError == true}
                    <p class="error-alert">{errMessage}</p>
                {:else}
                    {#if isSuccessVisible}	
                        
                            <div class="error-alert container w-full" transition:fade={{duration:150}}>
                                <div class="form-group bg-green rounded-full p-4">
                                    <p class="text-white text-center w-full h-full">✓ Super, tvůj mail jsme přijali, díky!</p>
                                </div>
                            </div>
                    {/if}
                {/if}

                <div class:hidden={isSuccessVisible} class="container w-full ">
                    <form id="surveyForm" class="  flex space-x-4" class:submitted on:submit|preventDefault={handleSubmit(emailInput)}>
                        <div class="form-group flex-1 ">
                            <input type="email" class="form-control active:border-none p-4 text-center bg-offwhite w-full h-full rounded-full " placeholder="Tvá emailová adresa" bind:value={emailInput} required>
                        </div>
                        <button class="btn btn-full text-m hover:bg-green h-16 w-16 bg-offwhite rounded-full" on:click={() => submitted = true}>🕊</button>
                    </form>
                </div>

        </div>
    </div>
   
</div>
<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-8 px-8">
    <DownloadItem link="mailto:info@socialmaps.app" text={data.email.textCs} image={data.email.image.url}  />
    <DownloadItem link="https://discord.gg/NfPgKDy8Ww"  text={data.discord.textCs} image={data.discord.image.url} />
    <a onclick="return false" href="/" class="w-full cursor-pointer bg-white shad p-8 flex flex-col buble justify-between rounded-xl">
        <p class="text-center mb-8">{data.support.textCs}</p>
        <div class="h-32 overflow-hidden flex justify-center">
            <img class="h-full w-auto" src={data.support.image.url} alt="icon">
        </div>
    </a>
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

    .submitted input:invalid {
		border: 1px solid #c00;
	}

	.submitted input:focus:invalid {
		outline: 1px solid #c00;
	}

    .shad {
        box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1);
    }

    .buble {
        @apply last-of-type:opacity-50 last:cursor-not-allowed;
    }
    
    </style>