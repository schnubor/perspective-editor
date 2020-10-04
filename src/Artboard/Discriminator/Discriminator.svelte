<script>
    import { activeBlock } from '../../stores/artboard';
    import blockMap from './../../Blocks/map';

    export let block;
    export let preview;

    const handleClick = (event) => {
        event.stopPropagation();
        activeBlock.update((currentActiveBlock) => {
            return block;
        });
    };
</script>

<div class:preview={preview} on:click={handleClick}>
    <svelte:component this={blockMap[block.name]} />
</div>

<style>
    .preview {
        border: 1px dashed #0076FF;
    }
</style>
