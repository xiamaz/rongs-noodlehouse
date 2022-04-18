export type AdditiveId = number;

export interface Additive {
	id: AdditiveId;
	name: string;
	[key: string]: string;
}

export default AdditiveId;