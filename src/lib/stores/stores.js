import { writable } from 'svelte/store';

export const selectedElement = writable(null);

export const projectState = writable({
    elements: [], // Initial state of the project
});