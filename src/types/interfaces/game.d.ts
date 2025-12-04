export interface GameItem {
	id: number;
	name: string;
	type: number;
	displayName: string;
	helperText?: string;
	suffix?: string;
	prefix?: string;
}

export interface GamePlayer {
	id: number;
	name: string;
}

export interface GameData {
	remit: GameItem[];
	players: GamePlayer[];
}
