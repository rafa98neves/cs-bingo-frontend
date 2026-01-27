<script lang="ts">
	import { resolve } from '$app/paths';

	import Button from '@smui/button';
	import CircularProgress from '@smui/circular-progress';
	import { Input } from '@smui/textfield';
	import { Icon } from '@smui/common';

	let username = '';
	let startingGame = false;

	const startGame = () => {
		startingGame = true;
		setTimeout(() => {
			window.location.href = resolve('/game/12345');
		}, 5000);
	};
</script>

<section>
	{#if !startingGame}
		<Input bind:value={username} placeholder="Enter your username" class="mb-4" />
		<Button onclick={startGame} variant="raised">
			Start Game
			<Icon class="material-icons">arrow_forward</Icon>
		</Button>
	{:else}
		<h1 class="mb-12">Waiting for game to start...</h1>
		<CircularProgress indeterminate />
	{/if}
</section>
