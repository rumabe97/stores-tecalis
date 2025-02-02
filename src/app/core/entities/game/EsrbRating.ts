export interface EsrbRatingProps {
    id: number;
    name: string;
    slug: string;
}

export class EsrbRating {
    id: number;
    name: string;
    slug: string;

    constructor(esrbRatingProps: EsrbRatingProps) {
        this.id = esrbRatingProps.id;
        this.name = esrbRatingProps.name;
        this.slug = esrbRatingProps.slug;
    }
}