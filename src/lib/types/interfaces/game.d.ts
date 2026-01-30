export interface IGameItem {
	id: number;
	name: string;
	type: number;
	displayName: string;
	helperText?: string;
	suffix?: string;
	prefix?: string;
}

export interface IGamePlayer {
	id: number;
	name: string;
}

export interface IGameData {
	remit: IGameItem[];
	players: IGamePlayer[];
}
