export interface GameStoreProps {
    id: number;
    store: Store;
}

export class GameStore {
    id: number;
    store: Store;

    constructor(storeProps: GameStoreProps) {
        this.id = storeProps.id;
        this.store = storeProps.store;
    }
}

export interface Store {
    id: number;
    name: string;
    slug: string;
    domain: string;
    gamesCount: number;
    imageBackground: string;
}
