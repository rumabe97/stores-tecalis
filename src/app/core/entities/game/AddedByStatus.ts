export interface AddedByStatusProps {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
}

export class AddedByStatus {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;

    constructor(addedByStatus: AddedByStatusProps) {
        this.yet = addedByStatus.yet;
        this.owned = addedByStatus.owned;
        this.beaten = addedByStatus.beaten;
        this.toplay = addedByStatus.toplay;
        this.dropped = addedByStatus.dropped;
        this.playing = addedByStatus.playing;
    }
}