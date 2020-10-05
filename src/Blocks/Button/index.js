import component from './EditComponent.svelte';

export const initialSettings = {
    text: 'A button',
    backgroundColor: '#0076FF',
}

export default {
    id: 'button',
    name: 'Button',
    component,
    initialSettings,
}
