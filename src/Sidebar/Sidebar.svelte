<script>
    import Block from './Block.svelte';
    import { activeBlock } from '../stores/artboard';
    import blockMap from '../Blocks/map';
    import { dndzone, TRIGGERS } from 'svelte-dnd-action';

    let shouldIgnoreDndEvents = false;
    const dropTargetStyle = { outline: 'none' };

    let blockList = Object.keys(blockMap).map((block) => {
        return {
            id: block.toLowerCase(),
            name: block,
        };
    });

    const handleEditClose = () => {
        activeBlock.update(() => {
            return {};
        });
    };

    const handleDndConsider = (e) => {
        const {trigger, id} = e.detail.info;
        if (trigger === TRIGGERS.DRAG_STARTED) {
            const idx = blockList.findIndex(item => item.id === id);
            const newId = `${Math.round(Math.random()*100000)}`;
            e.detail.items.splice(idx, 0, {...blockList[idx], id: newId});
            blockList = e.detail.items;
            shouldIgnoreDndEvents = true;
        }
        else if (!shouldIgnoreDndEvents) {
            blockList = e.detail.items;
        }
        else {
            blockList = [...blockList];
        }
    }
    const handleDndFinalize = (e) => {
        if (!shouldIgnoreDndEvents) {
            blockList = e.detail.items;
        }
        else {
            blockList = [...blockList];
            shouldIgnoreDndEvents = false;
        }
    }
</script>

<aside>
    {#if $activeBlock.name}
        <div>Edit {$activeBlock.name}</div>
        <div class="close" on:click={handleEditClose}>Close</div>
    {:else}
        <div class="blocks">
            <section use:dndzone={{items: blockList, dropFromOthersDisabled: true, dropTargetStyle }} on:consider={handleDndConsider} on:finalize={handleDndFinalize}>
                {#each blockList as block(block.id)}
                    <Block block={block} />
                {/each}
            </section>
        </div>
    {/if}
</aside>

<style>
    aside {
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
