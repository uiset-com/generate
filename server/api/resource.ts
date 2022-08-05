import { readFile } from "fs/promises";
import { resolve } from "path";
import { marked } from 'marked';

export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    const data = JSON.parse(await readFile(resolve(`resources/categorys/${query.category}/${query.resource}/meta.json`), "utf8"))
    // readme 说明
    let readme;
    try {
        readme = await readFile(resolve(`resources/categorys/${query.category}/${query.resource}/README.md`), "utf8")
        readme = marked.parse(readme)
    } catch(e) {}
    return {
        ...data,
        readme
    }
})