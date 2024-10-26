import type { Image } from '$lib/image';

export type TeamMember = {
	name: string;
	grade: number;
	roles: string[];
	image?: Image;
	favoritePart?: string;
};
