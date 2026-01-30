import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const _userState = () => {
	const initial: string = (browser && localStorage.getItem('csb-username')) || '';

	const { subscribe, set, update } = writable(initial);

	// Keep track of current value
	subscribe((value) => {
		if (!browser) return;
		localStorage.setItem('csb-username', value);
	});

	const resetUser = () => set('');

	return {
		subscribe,
		set,
		update: (username: string) => update((_user) => username),
		reset: resetUser
	};
};

export const user = _userState();
