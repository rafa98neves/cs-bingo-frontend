<script lang="ts">
	const {
		clickable = false,
		disabled = false,
		rounded = true,
		title = null,
		center = false,
		description = null,
		onclick = null,
		children = null,
		...rest
	} = $props();

	const role = clickable ? 'button' : undefined;
</script>

<div
	class="c-Card {rest.class || ''}"
	{role}
	class:rounded
	class:clickable
	class:disabled
	class:text-center={center}
	onclick={disabled ? null : onclick}
>
	{#if title}<h3 class="mb-4">{title}</h3>{/if}
	{#if description}<p>{description}</p>{/if}
	{@render children?.()}
</div>

<style scoped>
	.c-Card {
		position: relative;
		overflow: hidden;
		border: 1px solid;
		padding: 1rem 2rem;
		border: 1px solid var(--color-border);

		transition:
			transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1),
			box-shadow 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	.c-Card.rounded {
		border-radius: 0.75rem;
	}

	.c-Card.clickable {
		cursor: pointer;
		user-select: none;
	}

	.c-Card.clickable:hover {
		background-color: var(--color-secondary-50);
	}

	.c-Card.disabled {
		pointer-events: none;
	}
</style>
