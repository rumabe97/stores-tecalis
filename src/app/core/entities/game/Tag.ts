export interface TagProps {
    id: number;
    name: string;
    slug: string;
    language: string;
    gamesCount: number;
    imageBackground: string;
}

export class Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
    gamesCount: number;
    imageBackground: string;

    constructor(tagProps: TagProps) {
        this.id = tagProps.id;
        this.name = tagProps.name;
        this.slug = tagProps.slug;
        this.language = tagProps.language;
        this.gamesCount = tagProps.gamesCount;
        this.imageBackground = tagProps.imageBackground;
    }
}
