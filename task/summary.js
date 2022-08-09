// 相关统计
const fs = require('fs');
const path = require('path');
const summary = require('../data/summary.json');

const action = async () => {
    const categorys = fs.readdirSync(path.resolve(__dirname, '../resources/categorys')).filter(item => {
        const stat = fs.statSync(path.resolve(__dirname, '../resources/categorys', item));
        return stat && stat.isDirectory()
    });
    let count = 0;
    for (const category of categorys) {
        const resources = fs.readdirSync(path.resolve(__dirname, '../resources/categorys', category));
        count += resources.length;
    }

    summary.total_resources = count;
    fs.writeFileSync(path.resolve(__dirname, '../data/summary.json'), JSON.stringify(summary, null, 4), 'utf8');
};

action();