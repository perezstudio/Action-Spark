<!-- ElementBase.svelte -->
<script>
  export let id;
  export let customClasses = ""; // Allows passing additional Tailwind classes
</script>

<div class={`element-base ${customClasses}`} on:click>
  <slot />
  <!-- Placeholder for child content -->
</div>

<style>
  /* Additional specific styles if needed, but try to use Tailwind classes */
</style>
