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
        <div class="blocks">
        {#each blockList as block, index (block.id)}
            <Block block={block} />
        {/each}
        </div>
    {/if}
</aside>

<style>
    aside {
        background: #dddddd;
        width: 360px;
        height: 100%;
        padding: 32px;
        box-sizing: border-box;
        background-color: white;
        box-shadow: 2px 0 20px rgba(0,0,0,.1);
        z-index: 1;
    }

    .blocks {}
</style>
