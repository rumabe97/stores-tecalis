import {Game} from '../../../entities/game';

export interface StoreDto {
    id: number;
    name: string;
    domain: string;
    slug: string;
    games_count: number;
    image_background: number;
    description: string;
    games: Game[];
}