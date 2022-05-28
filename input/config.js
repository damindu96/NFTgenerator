const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;



const rarity = [
    {key:"", val: "original"},
    {key:"_r", val: "rare"},
    {key:"_sr", val: "super rare"},
    {key:"_ssr", val: "super super rare"},
];

const addRarity = (_str) => {
    let itemRarity;
    rarity.forEach((r) => {
        if (_str.includes(r.key)) {
            itemRarity = r.val;
        }
    });
    return itemRarity;
};


const cleanName = (_str) => {
    let name = _str.slice(0, -4);
    rarity.forEach((r) => {
      name = name.replace(r.key, "");
    });
    return name;
};

const getElements = (path) => {
    return fs
        .readdirSync(path)
        .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
        .map((i, index) => {
         return {
           id: index + 1,
           name: cleanName(i),
           fileName: i,
           rarity: addRarity(i),
         };
        });
    };


const layers = [
    {
    location: `${dir}/background/`,
    elements: getElements(`${dir}/background/`),
    position: {x:0, y:0},
    size: {width: width, height: height},
},

{
    location: `${dir}/Bottom lid/`,
    elements: getElements(`${dir}/Bottom lid/`),
    position: {x:0, y:0},
    size: {width: width, height: height},
},

{
    location: `${dir}/Eye color/`,
    elements: getElements(`${dir}/Eye color/`),
    position: {x:0, y:0},
    size: {width: width, height: height},
},

{
    location: `${dir}/Eyeball/`,
    elements: getElements(`${dir}/Eyeball/`),
    position: {x:0, y:0},
    size: {width: width, height: height},
},

{
    location: `${dir}/Iris/`,
    elements: getElements(`${dir}/Iris/`),
    position: {x:0, y:0},
    size: {width: width, height: height},
},

{
    location: `${dir}/Shine/`,
    elements: getElements(`${dir}/Shine/`),
    position: {x:0, y:0},
    size: {width: width, height: height},
},

{
    location: `${dir}/Top lid/`,
    elements: getElements(`${dir}/Top lid/`),
    position: {x:0, y:0},
    size: {width: width, height: height},
},
];

//console.log(layers, width);
module.exports = {layers, width, height}