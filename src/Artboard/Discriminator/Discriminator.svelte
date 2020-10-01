<script>
    import blockMap from './../../Blocks/map';

    export let type;
</script>

<svelte:component this={blockMap[type]} />
