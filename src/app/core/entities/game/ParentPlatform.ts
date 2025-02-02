export interface ParentPlatformProps {
    platform: {
        id: number;
        name: string;
        slug: string;
    };
}

export class ParentPlatform {
    platform: { id: number; name: string; slug: string };

    constructor(parentPlatformProps: ParentPlatformProps) {
        this.platform = parentPlatformProps.platform;
    }
}
