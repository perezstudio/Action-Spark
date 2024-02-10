<!-- HeaderBlock.svelte -->
<script>
  import ElementBase from "$lib/blocks/ElementBase.svelte";
  export let customClasses = ""; // For additional styling
</script>

<ElementBase customClasses={`bg-white shadow-md ${customClasses}`}>
  <header>
    <slot />
  </header>
</ElementBase>
