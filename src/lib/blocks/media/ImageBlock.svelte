<!-- Image.svelte -->
<script>
    import ElementBase from "../ElementBase.svelte";
    export let customClasses = ""; // For additional styling
    export let imageURL = ""; // For image url
    export let altText = ""; // For alt text
</script>

<ElementBase id="image" customClasses={`${customClasses}`}>
    <img src={imageURL} alt={altText} />
</ElementBase>
  