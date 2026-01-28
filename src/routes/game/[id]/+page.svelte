<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '@smui/button';
	import { Icon, Label } from '@smui/common';
	import { gameData } from '../game.data';
	import Card from '@/components/molecules/card.svelte';
	import Timer from '@/components/molecules/timer.svelte';
	import type { IGameItem, IGamePlayer } from '@/types/interfaces/game';
	import GameItem from '@/components/blocks/game-item.svelte';

	const player_data = [...gameData.players];
	const game_options = [...gameData.remit];

	let options = $state(game_options.slice(0, 4 * 4));
	let players = $state([...player_data]);
	let currentPlayer: IGamePlayer = $state(players.pop()!);
	let responses: Record<number, IGameItem> = $state({});

	let timerComp: { reset: () => void }; // seconds

	const newRound = () => {
		const isGameOver = players.length === 0 || Object.keys(responses).length >= options.length;

		if (isGameOver) {
			window.location.href = resolve('/game/end');
			return;
		}

		currentPlayer = players.pop()!;
		timerComp?.reset();
	};

	const onOptionClick = (item: IGameItem) => {
		responses[currentPlayer.id] = item;
		newRound();
	};

	const getResponse = (target: number): IGamePlayer | null => {
		const id = Object.entries(responses).find(([, value]) => value.id === target)?.[0] || null;
		if (!id) return null;
		const out = player_data.find((player) => player.id === Number(id)) || null;
		return out;
	};
</script>

<svelte:head>
	<title>Game</title>
	<meta name="description" content="CS Bingo game to play with friends" />
</svelte:head>

<section>
	<Card class="p-0!">
		<div class="justify-items-between grid h-18 grid-cols-6 items-center gap-4 mb-4">
			<Timer bind:this={timerComp} finish={newRound} />
			<div class="col-span-4">
				{currentPlayer.name}
				<div class="text-xxs text-slate-400">{players.length} remaining</div>
			</div>
			<Button onclick={newRound}>
				<Label>Skip</Label>
				<Icon class="material-icons">arrow_forward</Icon>
			</Button>
		</div>

		<div class="game-container grid grid-cols-4 grid-rows-4">
			{#each options as option}
				<GameItem {option} onclick={() => onOptionClick(option)} player={getResponse(option.id)} />
			{/each}
		</div>
	</Card>
</section>

<style scoped lang="scss">
	.game-container {
		border: 2px solid map.get($colors, 'border');
	}
</style>
