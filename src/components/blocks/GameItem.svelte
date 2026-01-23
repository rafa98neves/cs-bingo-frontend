<script lang="ts">
	import Card from '../../components/molecules/Card.svelte';
	import type { IGameItem, IGamePlayer } from '../../types/interfaces/game';
	interface Props {
		option: IGameItem;
		onclick: () => void;
		player: IGamePlayer | null;
	}

	let { option, onclick, player = null }: Props = $props();

	const optionClasses = () => {
		let classes = 'duration-300 ease-in border-0!';
		return player ? ` bg-secondary-100  ${classes} active` : classes;
	};
</script>

<Card clickable {onclick} rounded={false} class={optionClasses()} disabled={!!player}>
	<div class="flex h-full flex-col items-center justify-center text-center text-sm">
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
