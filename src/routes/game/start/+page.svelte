<script lang="ts">
	import { resolve } from '$app/paths';

	import { user } from '@/lib/stores/user.store';

	import Button from '@smui/button';
	import CircularProgress from '@smui/circular-progress';
	import Textfield from '@smui/textfield';
	import { Icon, Label } from '@smui/common';

	let startingGame = false;

	const startGame = (event: Event) => {
		event.preventDefault();
		if ($user.trim() === '') return;

		startingGame = true;
		setTimeout(() => (window.location.href = resolve('/game/12345')), 5000);
	};
</script>

<section>
	<div class="container">
		{#if !startingGame}
			<h1 class="mb-6">Who are you?</h1>
			<form on:submit={startGame} class="flex align-center flex-col w-full">
				<Textfield
					variant="filled"
					bind:value={$user}
					label="Enter your username"
					class="rounded mb-8 w-full"
				/>
				<Button type="submit" disabled={$user.trim() === ''}>
					<Label>Start Game</Label>
					<Icon class="material-icons">arrow_forward</Icon>
				</Button>
			</form>
		{:else}
			<h3 class="mb-12">Waiting for game to start...</h3>
			<CircularProgress style="height: 32px; width: 32px;" indeterminate />
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
