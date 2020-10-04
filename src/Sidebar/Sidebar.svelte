<script>
    import Block from './Block.svelte';
    import { activeBlock } from '../stores/artboard';
    import blockMap from '../Blocks/map';
    import { dndzone, TRIGGERS } from 'svelte-dnd-action';

    let shouldIgnoreDndEvents = false;

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
        console.warn(`got consider ${JSON.stringify(e.detail, null, 2)}`);
        const {trigger, id} = e.detail.info;
        if (trigger === TRIGGERS.DRAG_STARTED) {
            console.warn(`copying ${id}`);
            const idx = blockList.findIndex(item => item.id === id);
            const newId = `${id}_copy_${Math.round(Math.random()*100000)}`;
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
        console.warn(`got finalize ${JSON.stringify(e.detail, null, 2)}`);
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
            <section use:dndzone={{items: blockList, dropFromOthersDisabled: true}} on:consider={handleDndConsider} on:finalize={handleDndFinalize}>
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
