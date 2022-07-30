
import algoliasearch from 'algoliasearch'; 

export const searchFromAlgolia = async (keywords) => {
    const client = algoliasearch('EWH1QOM00T', '957d2ec40290d9a9b00145cb48ef92a7');
    const index = client.initIndex('resources');

    const { hits } = await index.search(keywords, {
        hitsPerPage: 10,
    })
    return hits;
}
