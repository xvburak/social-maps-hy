<script>
    import TestingComponent from "$lib/components/TestingComponent.svelte";
	 export let data
    //  console.log(data.generals[0].support)
</script>


<TestingComponent data={data.generals[0].support} />