<script>
    export let block;

    const dragStart = (e) => {
        // The data we want to make available when the element is dropped
        e.dataTransfer.setData('block', JSON.stringify(block));
    };
</script>

<div class="block" draggable="true" on:dragstart={(event) => dragStart(event)}>{block.name}</div>

<style>
    .block {
        border: 2px solid #dbdbdb;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 132px;
        height: 100px;
        border-radius: 8px;
        margin: 8px;
        box-sizing: border-box;
        cursor: move;
        background-color: white;
    }

    .block:hover {
        border: 2px solid #0076FF;
    }
</style>
