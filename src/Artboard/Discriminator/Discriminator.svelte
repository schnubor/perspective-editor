<script>
    import { activeBlock } from '../../stores/artboard';
    import blockMap from './../../Blocks/map';

    export let block;

    const handleClick = (event) => {
        event.stopPropagation();
        console.log('click', block.type);
        activeBlock.update((currentActiveBlock) => {
            return block;
        });
    };
</script>

<div on:click={handleClick}>
    <svelte:component this={blockMap[block.name]} />
</div>
