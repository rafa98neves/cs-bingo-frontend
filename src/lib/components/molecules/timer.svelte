<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	const { finish = null, duration = 10, ...rest } = $props();

	let timeout = 0;
	let startTs = 0;
	let pausedAccum = 0;
	let lastNow = 0;
	const remaining = writable(duration); // seconds (float)

	// replace the old radius/stroke/circumference with values matched to a 200x200 viewBox
	const viewBoxSize = 200;
	const center = viewBoxSize / 2; // 100
	const stroke = 8;
	const radius = 88; // center - stroke/2 - small padding
	const circumference = 2 * Math.PI * radius;

	const formatTime = (seconds: number) => {
		const s = Math.max(0, Math.round(seconds));
		const ss = (s % duration).toString().padStart(2, duration.toString());
		return ss;
	};

	const step = (now: number) => {
		if (!startTs) startTs = now;
		const elapsed = (now - startTs + pausedAccum) / 1000;
		const rem = Math.max(0, duration - elapsed);
		remaining.set(rem);
		lastNow = now;

		if (rem <= 0) {
			cancel();
			finish?.();
			return;
		}
		timeout = requestAnimationFrame(step);
	};

	const start = () => {
		if (timeout) return;
		startTs = lastNow || performance.now();
		timeout = requestAnimationFrame(step);
	};

	const cancel = () => {
		if (timeout) {
			cancelAnimationFrame(timeout);
			timeout = 0;
		}
	};

	export const reset = (newDuration = duration) => {
		cancel();
		pausedAccum = 0;
		startTs = 0;
		remaining.set(newDuration);
		start();
	};

	onMount(() => {
		// seed lastNow so start's timestamp is stable
		lastNow = performance.now();
		start();
	});

	onDestroy(cancel);
</script>

<div
	class="timer-wrap relative inline-flex h-full items-center justify-center {rest.class || ''}"
	role="group"
	aria-label="Countdown timer"
>
	<svg class="circle" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
		<circle
			class="ring-bg"
			cx={center}
			cy={center}
			r={radius}
			fill="none"
			stroke="url(#g1)"
			stroke-width={stroke}
			stroke-linecap="round"
		/>

		<defs>
			<linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
				<stop offset="0%" stop-color="#6B8FB8" stop-opacity="0.95"></stop>
				<stop offset="100%" stop-color="#7A9B7F" stop-opacity="0.9"></stop>
			</linearGradient>
		</defs>

		<g>
			<circle
				cx={center}
				cy={center}
				r={radius}
				fill="none"
				stroke="rgba(0,0,0,0.06)"
				stroke-width={stroke}
			/>
			<circle
				cx={center}
				cy={center}
				r={radius}
				fill="none"
				stroke="url(#g1)"
				stroke-width={stroke}
				stroke-linecap="round"
				stroke-dasharray={circumference}
				stroke-dashoffset={$remaining >= 0
					? circumference * (1 - $remaining / duration)
					: circumference}
				transform={`rotate(-90 ${center} ${center})`}
			/>
		</g>
	</svg>

	<!-- center content -->
	<div class="timer-text font-mono font-semibold" aria-live="polite">
		{$remaining !== undefined ? formatTime($remaining) : formatTime(duration)}
	</div>
</div>

<style scoped lang="scss">
	.timer-wrap {
		width: 100%;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		.circle {
			position: absolute;
			height: 100%;
			translate: transform(-50%, 0);
			.ring-bg {
				filter: blur(6px) opacity(0.12);
			}
		}
		.timer-text {
			user-select: none;
			color: map.get($colors, 'neutral-900');
			font-size: 1rem;
		}
	}
</style>
