
import algoliasearch from 'algoliasearch'; 

export const searchFromAlgolia = async (keywords) => {
    const client = algoliasearch(process.env.ALGOLIA_APP, process.env.ALGOLIA_QUERYKEY);
    const index = client.initIndex('resources');

    const { hits } = await index.search(keywords, {
        hitsPerPage: 10,
    })
    return hits;
}
