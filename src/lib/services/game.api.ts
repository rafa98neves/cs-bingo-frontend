import type { IGameData } from '../types/interfaces/game';
import { getService } from './api';

const service = getService('/api/games/');

export const getGameById = async (id: number) => {
	return await service.get(`${id}`);
};

export const setGameData = async (id: number, data: IGameData) => {
	return await service.post(`${id}`, data);
};
