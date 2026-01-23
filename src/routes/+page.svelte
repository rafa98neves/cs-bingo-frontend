<script lang="ts">
	import { resolve } from '$app/paths';
	import Card from '../components/molecules/Card.svelte';
	import { GAME_TYPE } from '../types/enums/game';

	const options = [
		{
			id: GAME_TYPE.DAILY,
			name: 'Daily Challenge',
			description: 'Create a game and challenge yourself daily',
			disabled: true
		},
		{
			id: GAME_TYPE.WITH_FRIENDS,
			name: 'Play With Friends',
			description: 'Invite friends and play together'
		}
	];

	const onOptionClick = (id: number) => () => {
		switch (id) {
			case GAME_TYPE.DAILY:
				// Currently disabled
				return;
			case GAME_TYPE.WITH_FRIENDS:
				window.location.href = resolve('/game');
				break;
		}
	};
</script>

<svelte:head>
	<title>CS Bingo</title>
	<meta name="description" content="CS Bingo game to play with friends" />
</svelte:head>

<section>
	<h1>CS Bingo</h1>

	<h2 class="mb-24">What do you want to play today?</h2>

	<div class="grid grid-flow-col grid-cols-{options.length} gap-12">
		{#each options as option}
			<Card
				clickable={!option.disabled}
				disabled={option.disabled}
				title={option.name}
				description={option.description}
				class={option.disabled ? 'opacity-50' : ''}
				center={true}
				onclick={onOptionClick(option.id)}
			/>
		{/each}
	</div>
</section>

<style scoped>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
