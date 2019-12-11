import { writable } from 'svelte/store';

export const selectedChapter = writable('_');
export const searchedText = writable('');