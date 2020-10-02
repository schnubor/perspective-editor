<script>
    import { artboardBlocks } from '../stores/artboard';
    import { flip } from 'svelte/animate';
    import { dndzone } from 'svelte-dnd-action';
    import Discriminator from './Discriminator/Discriminator.svelte';

    const flipDurationMs = 300;

    const handleDrop = (e) => {
        e.preventDefault();
        const block = JSON.parse(e.dataTransfer.getData('block'));

        // API create block...
        console.log('create block', block);
        const randomId = Math.random();
        block.id = `${block.id}-${randomId}`;

        artboardBlocks.update((currentBlocks) => {
            const updatedBlocks = currentBlocks.slice();
            updatedBlocks.push(block);

            return updatedBlocks;
        });
    };

    const handleDndConsider = (e) => {
        artboardBlocks.update((currentBlocks) => {
            return e.detail.items;
        });
    };

    const handleDndFinalize = (e) => {
        artboardBlocks.update((currentBlocks) => {
            return e.detail.items;
        });
    };
</script>

<section>
    <div
        class="canvas"
        on:drop={(event) => handleDrop(event)}
        ondragover="return false"
        use:dndzone={{ items: $artboardBlocks, flipDurationMs }}
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
    }

    .canvas {
        width: 375px;
        height: 640px;
        background-color: #cccccc;
    }
</style>
