import menuJson from "~/assets/menu.json"
import AdditiveId, { Additive } from "@/types/Additive";
import { MenuSection } from "@/types/FoodMenu";

function getSectionAdditives(section: MenuSection): AdditiveId[] {
	let additives: AdditiveId[][] = []
	if (section.items) {
		for (const item of section.items) {
			additives.push(item.additives);
		}
	}
	if (section.subsections && section.subsections.length > 0) {
		for (const subsection of section.subsections) {
			additives.push(getSectionAdditives(subsection));
		}
	}
	return additives.flat();
}

export function getUsedAdditives(): Additive[] {
	let usedAdditivesList: AdditiveId[][] = [];
	for (const section of menuJson.sections) {
		usedAdditivesList.push(getSectionAdditives(section));
	}
	const usedIds = usedAdditivesList.flat();
	
	let usedAdditives: Additive[] = [];
	for (const additive of menuJson.additives) {
		if (usedIds.includes(additive.id)) {
			usedAdditives.push(<Additive>additive);
		}
	}
	return usedAdditives;
}

export const UsedAdditives = getUsedAdditives();

export function getUsedId(id: AdditiveId): number {
	for (const [index, item] of UsedAdditives.entries()) {
		if (item.id == id) {
			return index + 1;
		}
	}
	return 0;
}