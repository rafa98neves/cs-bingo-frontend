<script lang="ts">
	import Card from '../../components/molecules/Card.svelte';
	import type { GameItem } from '../../types/interfaces/game';
	import { gameData } from './game';

	const options = gameData.remit.slice(0, 4 * 4);

	const selected: GameItem[] = [];

	const onOptionClick = (player: GameItem) => {
		console.log('Selected player:', player);
		selected.push(player);
	};
</script>

<svelte:head>
	<title>Game</title>
	<meta name="description" content="CS Bingo game to play with friends" />
</svelte:head>

<section>
	<h1>Game Page</h1>
	<p>This is where the game will be played.</p>

	<Card>
		<div class="gap-2 grid grid-cols-4 grid-rows-4">
			{#each options as option}
				<Card clickable onclick={() => onOptionClick(option)}>
					{#if option.prefix}
						<span class="mb-2 text-sm block italic">{option.prefix}</span>
					{/if}
					<span class="text-xl font-bold">{option.displayName}</span>
					{#if option.suffix}
						<span class="mt-2 text-sm block italic">{option.suffix}</span>
					{/if}
				</Card>
			{/each}
		</div>
	</Card>
</section>

<style lang="scss" scoped>
</style>
