<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, Spinner } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	let resolveData = false;

	setTimeout(() => (resolveData = true), 3000);
</script>

<section>
	{#if !resolveData}
		<h1 class="mb-12">Waiting game results...</h1>
		<Spinner />
	{:else}
		<h1 class="mb-12">Game Over</h1>
		<p class="mb-4">The game has ended. Here are the results:</p>
		<Button href={resolve('/')} class="mt-4 border-none">
			Go to Home
			<ArrowRightOutline size="sm" class="me-2 h-4 w-4" />
		</Button>
	{/if}
</section>
