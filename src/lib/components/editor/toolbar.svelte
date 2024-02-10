<script>
    // Define the elements that can be dragged into the canvas
    const elements = [
      { id: 'text', label: 'Text Block', type: 'text' },
      { id: 'image', label: 'Image', type: 'image' },
      // Add other elements as needed
    ];
  
    // Function to initiate the drag operation
    /**
   * @param {DragEvent & { currentTarget: EventTarget & HTMLDivElement; }} event
   * @param {{ id: string; label: string; type: string; }} element
   */
    function handleDragStart(event, element) {
      event.dataTransfer.setData('application/json', JSON.stringify(element));
    }
  </script>
  
  <div class="toolbar">
    {#each elements as element}
      <div
        class="toolbar-item"
        draggable="true"
        on:dragstart={(event) => handleDragStart(event, element)}>
        {element.label}
      </div>
    {/each}
  </div>
  
  <style>
    .toolbar {
      width: 200px; /* Adjust based on your layout */
      border-right: 1px solid #ccc; /* Visual separation */
      padding: 10px;
      box-sizing: border-box;
    }
    .toolbar-item {
      padding: 8px;
      margin-bottom: 4px;
      background-color: #f0f0f0;
      cursor: grab;
      border-radius: 4px;
    }
    .toolbar-item:active {
      cursor: grabbing;
    }
  </style>
  