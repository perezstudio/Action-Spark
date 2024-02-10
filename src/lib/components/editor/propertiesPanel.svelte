<script>
    import { selectedElement } from '$lib/stores/stores.js';
  
    // Subscribe to the selectedElement store
    $: selected = $selectedElement;
  
    function updateProperty(property, value) {
      selectedElement.update(current => {
        if (current) {
          current[property] = value;
        }
        return current;
      });
    }
  </script>
  
  {#if selected}
    <div class="properties-panel">
      <h3>Properties</h3>
      <!-- Example for a text element; adjust based on your element types and properties -->
      {#if selected.type === 'text'}
        <label>
          Text:
          <input
            type="text"
            value={selected.content}
            on:input={(e) => updateProperty('content', e.target.value)}
          />
        </label>
      {/if}
      <!-- Add more property inputs as needed -->
    </div>
  {:else}
    <div class="properties-panel">No element selected</div>
  {/if}
  
  <style>
    .properties-panel {
      /* Styles for your properties panel */
    }
  </style>
  