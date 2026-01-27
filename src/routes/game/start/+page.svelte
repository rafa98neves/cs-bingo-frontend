<script lang="ts">
	import { resolve } from '$app/paths';

	import Button from '@smui/button';
	import CircularProgress from '@smui/circular-progress';
	import Textfield from '@smui/textfield';
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
	<div class="container">
		{#if !startingGame}
			<Textfield
				variant="filled"
				bind:value={username}
				label="Enter your username"
				class="rounded mb-8 w-full"
			/>
			<Button onclick={startGame} variant="raised">
				Start Game
				<Icon class="material-icons">arrow_forward</Icon>
			</Button>
		{:else}
			<h1 class="mb-12">Waiting for game to start...</h1>
			<CircularProgress indeterminate />
		{/if}
	</div>
</section>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 24rem;
		align-items: center;
	}
</style>
