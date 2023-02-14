import {getPage} from '$lib/firebase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params}) => {
  console.log(params)
  return await getPage(params.id, 'forms');
};
