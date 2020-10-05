import component from './EditComponent.svelte';

export const initialSettings = {
    text: 'Hallo I bims 1 Text',
    color: '#000000',
    weight: 'normal'
}

export default {
    id: 'text',
    name: 'Text',
    component,
    initialSettings,
}
