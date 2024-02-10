<!-- Heading3.svelte -->
<script>
    import ElementBase from "$lib/blocks/ElementBase.svelte";
    export let customClasses = ""; // For additional styling
    export let content = ""; // For the heading content
</script>

<ElementBase customClasses={`${customClasses}`}>
    <h3>
        {content}
    </h3>
</ElementBase>
  