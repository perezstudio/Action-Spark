<!-- ForEachBlock.svelte -->
<script lang="ts">
  import ElementBase from "$lib/blocks/ElementBase.svelte";
  export let customClasses = ""; // For additional styling
  export let items: any[] = [];
</script>

<ElementBase customClasses={`bg-white shadow-md ${customClasses}`}>
  <div class="foreach-block">
    {#each items as item}
      <slot name="item" {item}></slot>
    {/each}
  </div>
</ElementBase>