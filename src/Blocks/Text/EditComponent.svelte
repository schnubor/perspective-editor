<script>
    import Box from '../Box/Box.svelte';

    export let text = 'Hallo I bims 1 Text';
</script>

<Box>
    <div class="text" contenteditable="true">{text}</div>
</Box>

<style>
    .text {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
            Cantarell, 'Helvetica Neue', sans-serif;
        color: #000;
    }
</style>
