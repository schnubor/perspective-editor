<script>
    import Block from './Block.svelte';

    const blocks = [
        {
            id: 'button',
            name: 'Button',
        },
        {
            id: 'divider',
            name: 'Divider',
        },
    ];
</script>

<aside>
    {#each blocks as block, index (block.id)}
        <Block block={block} />
    {/each}
</aside>

<style>
    aside {
        background: #dddddd;
        width: 400px;
        height: 100%;
    }
</style>
