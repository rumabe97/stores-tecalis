export interface RatingProps {
    id: number;
    title: string;
    count: number;
    percent: number;
}

export class Rating {
    id: number;
    title: string;
    count: number;
    percent: number;

    constructor(ratingProps: RatingProps) {
        this.id = ratingProps.id;
        this.title = ratingProps.title;
        this.count = ratingProps.count;
        this.percent = ratingProps.percent;
    }
}
