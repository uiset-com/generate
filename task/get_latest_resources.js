// 获取最近更新的资源
const { Octokit, App } = require("octokit");
const fs = require("fs");
const path = require("path");
const categorys = require('../data/category.json');

const getLatestResources = async () => {
    const octokit = new Octokit({ auth: process.env.LATEST_GITHUB_KEY });

    const {
        data: { login },
    } = await octokit.rest.users.getAuthenticated();
    const latests = [];
    let res = await octokit.rest.repos.listCommits({
        owner: 'uiset-com',
        repo: 'resources'
    });
    
    for (let commit of res.data) {
        await getCommit(octokit, commit, latests);
        if (latests.length >= 4) {
            break;
        }
    }
    const latestJSON = [];
    for (let item of latests) {
        const file = fs.readFileSync(path.resolve(__dirname, '../resources/categorys', item, 'meta.json'), 'utf8');
        const [category, resource] = item.split('/');
        const categoryItem = categorys.find(c => c.value === category);
        latestJSON.push({
            ...JSON.parse(file),
            category: categoryItem,
            value: resource
        });
    }

    fs.writeFileSync(path.resolve(__dirname, '../content/latests', 'latests.json'), JSON.stringify(latestJSON, null, 4));
}

const getCommit = async (octokit, commit, latests) => {
    const ref = commit.sha;
    res = await octokit.rest.repos.getCommit({
        owner: 'uiset-com',
        repo: 'resources',
        ref
    });
    const files = res.data.files;
    for (const file of files) {
        if (/^categorys.+meta\.json$/.test(file.filename) || /^categorys.+thumbnail\.png$/.test(file.filename)) {
            const arr = file.filename.split('/');
            const category = arr[1];
            const resource = arr[2];
            const path = `${category}/${resource}`;
            if (category && resource && !latests.includes(path)) {
                latests.push(path);
            }
        }
        if (latests.length >= 4) {
            return;
        }
    }
}


getLatestResources();