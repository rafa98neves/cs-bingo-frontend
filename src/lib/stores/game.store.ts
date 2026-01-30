import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { IGameData } from '../types/interfaces/game';

const _gameState = () => {
	let initialData: IGameData[] = [];

	try {
		if (browser) {
			const storedData = localStorage.getItem('csb-game');
			if (storedData) {
				initialData = JSON.parse(storedData);
			}
		}
	} catch (error) {
		console.error('Error parsing stored game data:', error);
	}

	const { subscribe, set, update } = writable(initialData);

	// Keep track of current value
	subscribe((value) => {
		if (!browser) return;
		localStorage.setItem('csb-game', JSON.stringify(value));
	});

	const resetGame = () => set([]);

	return {
		subscribe,
		set,
		update: (gameData: IGameData[]) => update((_game) => gameData),
		reset: resetGame
	};
};

export const game = _gameState();
