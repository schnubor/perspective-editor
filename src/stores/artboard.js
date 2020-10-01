import { writable } from 'svelte/store';

export const artboardBlocks = writable([
    {
        id: 'button',
        name: 'Button',
    },
]);
