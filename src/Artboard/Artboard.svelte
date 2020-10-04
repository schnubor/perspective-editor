<script>
    import { artboardBlocks } from '../stores/artboard';
    import { flip } from 'svelte/animate';
    import { dndzone } from 'svelte-dnd-action';
    import Discriminator from './Discriminator/Discriminator.svelte';

    const flipDurationMs = 300;
    const dropTargetStyle = { outline: 'none' };

    const handleDndConsider = (e) => {
        artboardBlocks.update(() => {
            return e.detail.items;
        });
    };

    const handleDndFinalize = (e) => {
        artboardBlocks.update(() => {
            return e.detail.items;
        });
    };

    const transformDraggedElement = (draggedEl, data, index) => {
        draggedEl.innerHTML = '';

        new Discriminator({
            target: draggedEl,
            props: {
                preview: true,
                block: data
            }
        });
    }
</script>

<section>
    <div
        class="canvas"
        use:dndzone={{ items: $artboardBlocks, flipDurationMs, transformDraggedElement, dropTargetStyle }}
        on:consider={handleDndConsider}
        on:finalize={handleDndFinalize}
    >
        {#each $artboardBlocks as block, index (block.id)}
            <div animate:flip={{ duration: flipDurationMs }}>
                <Discriminator block={block} />
            </div>
        {/each}
    </div>
</section>

<style>
    section {
        height: 100%;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        background-color: #f0f0f0;
    }

    .canvas {
        width: 375px;
        min-height: 640px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,.1);
    }
</style>
