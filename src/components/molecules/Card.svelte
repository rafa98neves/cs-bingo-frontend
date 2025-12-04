<script lang="ts">
	const {
		children = null,
		clickable = false,
		disabled = false,
		title = null,
		description = null,
		onclick = null,
		...rest
	} = $props();

	const role = clickable ? 'button' : undefined;
</script>

<div
	class="c-Card {rest.class || ''}"
	{role}
	class:clickable
	class:disabled
	onclick={disabled ? null : onclick}
>
	{#if title}<h3 class="mb-4">{title}</h3>{/if}
	{#if description}<p>{description}</p>{/if}
	{@render children?.()}
</div>

<style lang="scss" scoped>
	.c-Card {
		position: relative;
		overflow: hidden;
		border-radius: 0.375rem;
		border: 1px solid;
		text-align: center;
		padding: 1rem 2rem;
		background: linear-gradient(
			to bottom right,
			rgba(241, 245, 249, 0.8),
			rgba(255, 255, 255, 0.6),
			rgba(241, 245, 249, 0.4)
		);
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
		transition:
			transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1),
			box-shadow 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);

		&.clickable {
			cursor: pointer;
			user-select: none;
			&:hover {
				transform: translateY(-0.125rem);
				box-shadow:
					0 25px 50px -12px rgba(0, 0, 0, 0.25),
					0 10px 10px -5px rgba(0, 0, 0, 0.1);
			}
		}

		&.disabled {
			opacity: 0.6;
			pointer-events: none;
		}
	}
</style>
