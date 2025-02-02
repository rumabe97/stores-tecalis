export interface SimpleGameProps {
    id:number;
    slug:string;
    name:string;
    added:number;
}

export class SimpleGame {
    id:number;
    slug:string;
    name:string;
    added:number;

    constructor(simpleGameProps: SimpleGameProps) {
        this.id = simpleGameProps.id;
        this.slug = simpleGameProps.slug;
        this.name = simpleGameProps.name;
        this.added = simpleGameProps.added;
    }
}
