<script lang="ts">
	import { onMount } from 'svelte';

	const { duration = 600, delay = 0, children } = $props();

	let visible = $state(false);

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, delay);
	});
</script>

<div class:visible style="--duration: {duration}ms;">
	{@render children?.()}
</div>

<style scoped lang="scss">
	div {
		display: contents;

		& > :global(*) {
			opacity: 0;
			transition: opacity var(--duration, 600ms) ease-in-out;
		}

		&.visible > :global(*) {
			opacity: 1;
		}
	}
</style>
