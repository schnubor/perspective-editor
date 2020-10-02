<script>
    import Block from './Block.svelte';
    import { activeBlock } from '../stores/artboard';
    import blockMap from '../Blocks/map';

    const blockList = Object.keys(blockMap).map((block) => {
        return {
            id: block.toLowerCase(),
            name: block,
        };
    });

    const handleEditClose = () => {
        activeBlock.update((currentActiveBlock) => {
            return {};
        });
    };
</script>

<aside>
    {#if $activeBlock.name}
        <div>Edit {$activeBlock.name}</div>
        <div class="close" on:click={handleEditClose}>Close</div>
    {:else}
        {#each blockList as block, index (block.id)}
            <Block block={block} />
        {/each}
    {/if}
</aside>

<style>
    aside {
        background: #dddddd;
        width: 400px;
        height: 100%;
    }
</style>
