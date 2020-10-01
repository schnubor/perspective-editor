<script>
    import { artboardBlocks } from '../stores/artboard';
    import { flip } from 'svelte/animate';
    import { dndzone } from 'svelte-dnd-action';
    import Discriminator from './Discriminator/Discriminator.svelte';

    const flipDurationMs = 300;

    const handleDrop = (e) => {
        e.preventDefault();
        const block = JSON.parse(e.dataTransfer.getData('block'));
        console.log(block);

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

    // const handleBlockDrop = (event, index) => {
    //     console.log('insert at', index);
    //     event.dataTransfer.dropEffect = 'move';
    //     const origin = parseInt(event.dataTransfer.getData('origin'));
    //     const destination = index;
    //
    //     artboardBlocks.update((currentBlocks) => {
    //         const updatedBlocks = currentBlocks.slice();
    //
    //         if (origin < destination) {
    //             updatedBlocks.splice(destination + 1, 0, updatedBlocks[origin]);
    //             updatedBlocks.splice(origin, 1);
    //         } else {
    //             updatedBlocks.splice(destination, 0, updatedBlocks[origin]);
    //             updatedBlocks.splice(origin + 1, 1);
    //         }
    //
    //         return updatedBlocks;
    //     });
    // };
    //
    // const handleBlockDragStart = (event, index) => {
    //     console.log('start block', index);
    //     event.dataTransfer.effectAllowed = 'move';
    //     event.dataTransfer.dropEffect = 'move';
    //     event.dataTransfer.setData('origin', index);
    // };
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
                <Discriminator type={block.name} />
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
