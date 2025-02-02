export interface ScreenshotProps {
    id: number;
    image: string;
}

export class Screenshot {
    id: number;
    image: string;

    constructor(screenshotProps: ScreenshotProps) {
        this.id = screenshotProps.id;
        this.image = screenshotProps.image;
    }
}
