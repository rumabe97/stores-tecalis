import {SimpleGame} from '../game';

export interface StoreProps {
    id: number;
    name: string;
    domain: string;
    slug: string;
    gamesCount: number;
    imageBackground: number;
    description: string;
    games: SimpleGame[];
}

export class Store {
    id: number;
    name: string;
    domain: string;
    slug: string;
    gamesCount: number;
    imageBackground: number;
    description: string;
    games: SimpleGame[];

    constructor(storeProps: StoreProps) {
        this.id = storeProps.id;
        this.name = storeProps.name;
        this.domain = storeProps.domain;
        this.slug = storeProps.slug;
        this.gamesCount = storeProps.gamesCount;
        this.imageBackground = storeProps.imageBackground;
        this.description = storeProps.description;
        this.games = storeProps.games;
    }
}