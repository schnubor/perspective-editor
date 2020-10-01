<script>
    export let block;

    const dragStart = (e) => {
        // The data we want to make available when the element is dropped
        e.dataTransfer.setData('block', JSON.stringify(block));
    };
</script>

<div draggable="true" on:dragstart={(event) => dragStart(event)}>{block.name}</div>
