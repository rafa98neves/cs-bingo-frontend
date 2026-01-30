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

<style scoped lang="scss">
	.c-Card {
		position: relative;
		overflow: hidden;
		padding: 1.5rem;
		background-color: $surface;
		border: 1px solid map.get($colors, 'border');
		box-shadow: 0 1px 3px map.get($colors, 'shadow');

		transition:
			transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1),
			box-shadow 0.2s cubic-bezier(0.2, 0.8, 0.2, 1),
			border-color 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);

		&.rounded {
			border-radius: 0.75rem;
		}

		&.clickable {
			cursor: pointer;
			user-select: none;

			&:hover:not(.disabled) {
				transform: translateY(-2px);
				box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
				border-color: map.get($colors, 'neutral-400');
				background-color: $surface-variant;
			}

			&:active:not(.disabled) {
				transform: translateY(0);
				box-shadow: 0 1px 3px map.get($colors, 'shadow');
			}
		}

		&.disabled {
			pointer-events: none;
			opacity: 0.5;
			background-color: map.get($colors, 'neutral-100');
			color: map.get($colors, 'neutral-400');
		}

		h3 {
			color: $on-surface;
			font-weight: 600;
			font-size: 1.125rem;
			line-height: 1.5;
		}

		p {
			color: map.get($colors, 'neutral-500');
			line-height: 1.6;
		}
	}
</style>
