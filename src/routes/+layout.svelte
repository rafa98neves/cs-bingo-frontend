<script lang="ts">
	import Header from '$lib/components/blocks/header.svelte';
	import '@/styles/index.scss';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>O Roman é um burro do :)</p>
	</footer>
</div>

<style scoped lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	footer p {
		color: rgba(255, 255, 255, 0.5);
		margin: 0;
	}
</style>
