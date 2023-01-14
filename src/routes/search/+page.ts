import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';


export const load = (async ({ url, fetch }) => {
    try {
        const query = url.searchParams.get('q')
        const res = await fetch(`https://api.datamuse.com/words?sp=${query}`)
        const words = await res.json()
    
        return {
            titlePrefix: `Results for`,
            titleQuery: query,
            words,
        }
    } catch (jsError) {
        console.log(jsError)
        throw error(404, 'Not Found')
    }
}) satisfies PageLoad;