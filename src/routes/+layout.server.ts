
import { getSheet } from "$lib/sheets";
import type { LayoutServerLoad } from './$types'


export const load: LayoutServerLoad = async () => {
	return {
		sheet: await getSheet(),
	}
}