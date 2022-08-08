
const algoliasearch = require('algoliasearch')
const fs = require('fs')
const path = require('path')
const Categorys = require('../data/category.json')

// 推送数据到 algolia
function pushData() {
    const client = algoliasearch(process.env.ALGOLIA_APP, process.env.ALGOLIA_PUSHKEY);
    const index = client.initIndex('resources');
    const categorys = fs.readdirSync(path.resolve(__dirname, '../resources/categorys'));
    const datas = [];
    for (let category of categorys) {
        const categoryData = Categorys.find(item => item.value === category) || {};
        const resources = fs.readdirSync(path.resolve(__dirname, '../resources/categorys', category));
        for (let resource of resources) {
            const metadata = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../resources/categorys', category, resource, 'meta.json'), 'utf8'));
            const data = {
                ...metadata,
                objectID: resource,
                value: resource,
                category: category,
                category_alia: categoryData.name
            }
            datas.push(data);
        }
    }
    index.saveObjects(datas);
}

pushData();

