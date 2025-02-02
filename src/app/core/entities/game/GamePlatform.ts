export interface GamePlatformProps {
    platform: Platform;
    releasedAt: string;
    requirementsEn?: Requirements;
}

export class GamePlatform {
    platform: Platform;
    releasedAt: string;
    requirementsEn?: Requirements;

    constructor(platformProps: GamePlatformProps) {
        this.platform = platformProps.platform;
        this.releasedAt = platformProps.releasedAt;
        this.requirementsEn = platformProps.requirementsEn;
    }
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
    image?: string | null;
    yearEnd?: number | null;
    yearStart?: number | null;
    gamesCount: number;
    imageBackground: string;
}

export interface Requirements {
    minimum?: string;
    recommended?: string;
}
