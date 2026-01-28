<script lang="ts">
	import Card from '@/components/molecules/card.svelte';
	import { generateClassName } from '@/helpers/class-generator';
	import type { IGameItem, IGamePlayer } from '@/types/interfaces/game';

	interface Props {
		option: IGameItem;
		onclick: () => void;
		player: IGamePlayer | null;
	}

	let { option, onclick, player = null }: Props = $props();
</script>

<Card
	clickable
	{onclick}
	rounded={false}
	class={generateClassName({ 'card-item': true, active: !!player })}
	disabled={!!player}
>
	<div class="flex h-24 flex-col items-center justify-center text-center text-sm">
		{#if player}
			<span class="mt-2 text-center text-xl font-bold">{player.name}</span>
			<span class="align-middle text-sm">{option.displayName}</span>
		{:else}
			{#if option.prefix}
				<span class="mb-1 block italic">{option.prefix}</span>
			{/if}
			<span class="align-middle text-xl font-bold">{option.displayName}</span>
			{#if option.suffix}
				<span class="mt-1 block italic">{option.suffix}</span>
			{/if}
		{/if}
	</div>
</Card>

<style scoped lang="scss">
	:global {
		.c-Card {
			box-shadow: none !important;

			&.active {
				/* background-color: map.get($colors, 'accent-teal') !important;
				border-color: $on-white !important;
				color: $on-white !important; */
			}
		}
	}
</style>
