<script>
    import { inview } from "svelte-inview";
    import { activeSectionId } from '../../../stores'
    export let id;

    const options = { 
        threshold: 0.1,
        unobserveOnEnter: false,
    }
    const handleEnter = id => ($activeSectionId = id);
</script>

<section {id} 
    class:active={$activeSectionId===id} 
    use:inview={options} 
    on:enter={()=> handleEnter(id)}
>
        <slot></slot>
</section>
  
  <style>
    section {
          @apply bg-white;
          position: relative;
          min-height: 100vh;
          transition: .5s ease-in-out;
    }
      /* section.active {
          @apply bg-gray;
      } */
  </style> 