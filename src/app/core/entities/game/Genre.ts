export interface GenreProps {
    id: number;
    name: string;
    slug: string;
    gamesCount: number;
    imageBackground: string;
}

export class Genre {
    id: number;
    name: string;
    slug: string;
    gamesCount: number;
    imageBackground: string;

    constructor(genreProps: GenreProps) {
        this.id = genreProps.id;
        this.name = genreProps.name;
        this.slug = genreProps.slug;
        this.gamesCount = genreProps.gamesCount;
        this.imageBackground = genreProps.imageBackground;
    }
}
