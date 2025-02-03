import {AddedByStatus} from './AddedByStatus';
import {Rating} from './Rating';
import {ParentPlatform} from './ParentPlatform';
import {EsrbRating} from './EsrbRating';
import {Screenshot} from './Screenshot';

export interface GameProps {
    id: number;
    slug: string;
    name: string;
    released: string;
    description: string
    tba: boolean;
    backgroundImage: string;
    rating: number;
    ratingTop: number;
    ratings: Rating[];
    ratingsCount: number;
    reviewsTextCount: number;
    added: number;
    addedByStatus: AddedByStatus;
    metacritic: number;
    playtime: number;
    suggestionsCount: number;
    updated: string;
    userGame: any;
    reviewsCount: number;
    saturatedColor: string;
    dominantColor: string;
    // platforms: GamePlatform[];
    parentPlatforms: ParentPlatform[];
    // genres: Genre[];
    // stores: GameStore[];
    clip: any;
    // tags: Tag[];
    esrbRating: EsrbRating;
    shortScreenshots: Screenshot[];
}

export class Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    description: string
    tba: boolean;
    backgroundImage: string;
    rating: number;
    ratingTop: number;
    ratings: Rating[];
    ratingsCount: number;
    reviewsTextCount: number;
    added: number;
    addedByStatus: AddedByStatus;
    metacritic: number;
    playtime: number;
    suggestionsCount: number;
    updated: string;
    userGame: any;
    reviewsCount: number;
    saturatedColor: string;
    dominantColor: string;
    // platforms: GamePlatform[];
    parentPlatforms: ParentPlatform[];
    // genres: Genre[];
    // stores: GameStore[];
    clip: any;
    // tags: Tag[];
    esrbRating: EsrbRating;
    shortScreenshots: Screenshot[];

    constructor(gameProps: GameProps) {
        this.id = gameProps.id;
        this.slug = gameProps.slug;
        this.name = gameProps.name;
        this.released = gameProps.released;
        this.description = gameProps.description;
        this.tba = gameProps.tba;
        this.backgroundImage = gameProps.backgroundImage;
        this.rating = gameProps.rating;
        this.ratingTop = gameProps.ratingTop;
        this.ratings = gameProps.ratings;
        this.ratingsCount = gameProps.ratingsCount;
        this.reviewsTextCount = gameProps.reviewsTextCount;
        this.added = gameProps.added;
        this.addedByStatus = gameProps.addedByStatus;
        this.metacritic = gameProps.metacritic;
        this.playtime = gameProps.playtime;
        this.suggestionsCount = gameProps.suggestionsCount;
        this.updated = gameProps.updated;
        this.userGame = gameProps.userGame;
        this.reviewsCount = gameProps.reviewsCount;
        this.saturatedColor = gameProps.saturatedColor;
        this.dominantColor = gameProps.dominantColor;
        // this.platforms = gameProps.platforms;
        this.parentPlatforms = gameProps.parentPlatforms;
        // this.genres = gameProps.genres;
        // this.stores = gameProps.stores;
        this.clip = gameProps.clip;
        // this.tags = gameProps.tags;
        this.esrbRating = gameProps.esrbRating;
        this.shortScreenshots = gameProps.shortScreenshots;
    }
}
