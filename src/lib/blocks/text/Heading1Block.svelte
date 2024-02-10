<!-- Heading1.svelte -->
<script>
  import ElementBase from "$lib/blocks/ElementBase.svelte";
  export let customClasses = ""; // For additional styling
  export let content = ""; // For the heading content
</script>

<ElementBase customClasses={`${customClasses}`}>
  <h1>
    {content}
  </h1>
</ElementBase>
