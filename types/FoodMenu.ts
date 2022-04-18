import {AdditiveId, Additive} from "@/types/Additive";

export interface MenuItem {
	name: string;
	desc?: string;
	price: number;
	additives: AdditiveId[];
	[key: string]: any;
}

export interface MenuSection {
	title: string;
	desc?: string;
	items?: MenuItem[];
	subsections?: MenuSection[];
	[key: string]: any;
}

export interface Menu {
	sections: MenuSection[];
	additives: Additive[];
}
