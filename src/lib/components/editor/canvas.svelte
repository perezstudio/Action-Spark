<script>
    import { onMount } from 'svelte';
    import { dndzone } from 'svelte-dnd-action';
    import { selectedElement } from '$lib/stores/stores.js'; // Import the selectedElement store
    import ElementBase from '$lib/blocks/ElementBase.svelte';
    import ComponentRegistry from '$lib/blocks/ComponentRegistry.js';
    import PropertiesPanel from '$lib/components/editor/propertiesPanel.svelte';

    let elements = []; // Array to hold elements added to the canvas
  
    // Function to handle adding new elements (e.g., via toolbar actions)
    function addElement(element) {
        const newElement = {
            id: Date.now(), // Simple unique ID
            type: elementType,
            // Default content based on type
        };
        elements = [...elements, newElement];
    }
  
    // Optional: Function to handle element selection, moving, etc.
    function selectElement(elementId) {
        selectedElement.set(element);
    }

    function handleDrop(event) {
        const data = JSON.parse(event.dataTransfer.getData('application/json'));
        elements = [...elements, { ...data, id: Date.now() }]; // Add a unique ID
    }

    function handleDragOver(event) {
        event.preventDefault(); // Necessary to allow dropping
    }
  
    onMount(() => {
      // Initialize with default elements or fetch existing page layout if needed
    });
  </script>
  
  <div class="editor-canvas bg-slate-200 " use:dndzone="{{ items: elements, flipDurationMs: 300 }}" on:click="{selectElement}" on:drop|preventDefault={handleDrop}
  on:dragover|preventDefault={handleDragOver}>
    {#each elements as element (element.id)}
        <svelte:component on:click={() => selectElement(element)} this={ComponentRegistry[element.type]} {...element}/>
    {/each}
  </div>
  
  <style>
    .editor-canvas {
      min-height: 500px; /* Minimum height */
      width: 100%; /* Full width */
      height: 100vh; /* Full height */
      border: 2px dashed #ccc; /* Dashed border to indicate area */
      position: relative; /* For absolute positioning of child elements */
    }
    .draggable-element {
      position: absolute; /* Positioned absolutely within the canvas */
      cursor: move; /* Indicate that elements can be moved */
    }
  </style>
  