<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<header>
	<nav>
		<a href={resolve('/')} class="logo">CS BINGO</a>
	</nav>
</header>

<style scoped lang="scss">
	header {
		background-color: $surface;
		border-bottom: 1px solid map.get($colors, 'border');
		box-shadow: 0 1px 3px map.get($colors, 'shadow');
	}

	nav {
		display: flex;
		align-items: center;
		margin: 0 auto;
		padding: 1rem 1.5rem;
	}

	.logo {
		font-size: 1rem;
		font-weight: 700;
		color: $primary;
		text-decoration: none;
		letter-spacing: 0.02em;
		transition: color 0.2s ease;

		&:hover {
			color: map.get($colors, 'primary-600');
		}
	}
</style>
