// 首字母大写
function firstUp(str) {
    return str.split('-').map((item, index) => {
        return index === 0 ? item : item[0].toUpperCase() + item.slice(1);
    }).join('');
  }
  
  const files = require.context('./', true, /\.svg$/);
  const requireAll = context => context.keys().reduce((result, item) => {
    result[firstUp(item.match(/[\w-]+/)[0])] = {
        html: context(item).default
    };
    return result;
  }, {});
  const svgs = requireAll(files);
  export default svgs;
  