export function generateClassName(modifiers: Record<string, boolean>): string {
	return Object.entries(modifiers)
		.filter(([_, isActive]) => isActive)
		.map(([className, _]) => className)
		.join(' ');
}
