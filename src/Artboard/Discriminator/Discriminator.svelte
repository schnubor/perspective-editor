<script>
    import { activeBlock } from '../../stores/artboard';
    import blockList from './../../Blocks';
    import find from 'lodash/find';

    export let block;
    export let preview = false;

    const handleClick = (event) => {
        event.stopPropagation();
        activeBlock.update((currentActiveBlock) => {
            return block;
        });
    };

    const blockData = find( blockList, { name: block.name });
</script>

<div class:preview={preview} on:click={handleClick}>
    <svelte:component this={blockData.component} />
</div>

<style>
    .preview {
        border: 1px dashed #0076FF;
    }
</style>
