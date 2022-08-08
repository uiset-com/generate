const fs = require('fs');
const path = require('path');

// 将 resources 目录下的文件复制到 content 下面
const action = () => {
    const categorys = fs.readdirSync(path.join(__dirname, '../resources/categorys'))
    for (let category of categorys) {
        const resources = fs.readdirSync(path.join(__dirname, '../resources/categorys', category))
        for (let resource of resources) {
            fs.cpSync(path.join(__dirname, '../resources/categorys', category, resource, 'meta.json'), path.join(__dirname, '../content/categorys', category, 'meta', `${resource}.json`))
            const readmeFile = path.join(__dirname, '../resources/categorys', category, resource, 'README.md');
            if (fs.existsSync(readmeFile)) {
                fs.cpSync(readmeFile, path.join(__dirname, '../content/categorys', category, 'readme', `${resource}.md`))
            }
        }
    }
}

action();
