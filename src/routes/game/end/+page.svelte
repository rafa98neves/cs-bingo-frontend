<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '@smui/button';
	import CircularProgress from '@smui/circular-progress';
	import { Icon, Label } from '@smui/common';

	let resolveData = false;

	setTimeout(() => (resolveData = true), 3000);
</script>

<section>
	{#if !resolveData}
		<h1 class="mb-12">Waiting game results...</h1>
		<CircularProgress style="height: 32px; width: 32px;" indeterminate />
	{:else}
		<h1 class="mb-12">Game Over</h1>
		<p class="mb-4">The game has ended. Here are the results:</p>
		<Button href={resolve('/')} class="mt-4" variant="raised">
			<Label>Go to Home</Label>
			<Icon class="material-icons">arrow_forward</Icon>
		</Button>
	{/if}
</section>
