<!-- VideoBlock.svelte -->
<script>
    import ElementBase from "../ElementBase.svelte";
    export let customClasses = ""; // For additional styling
    export let errorMessage = ""; // For the message shown if video format isn't supported
    export let controls = true;
    export let src = "";
    export let type = "video/mp4";
</script>

<ElementBase id="video" customClasses={`${customClasses}`}>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video controls>
        <source src={src} type={type}>
        {errorMessage}
    </video>
</ElementBase>
  