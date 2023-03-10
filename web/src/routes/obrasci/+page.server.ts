import {getDocuments} from '$lib/firebase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    forms: await getDocuments('forms')
  };
};
