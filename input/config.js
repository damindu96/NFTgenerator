const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "NFT GENERATOR";
const baseImageUri = "https://hashlips/nft";
const startEditionFrom = 1;
const endEditionAt = 10;  
const editionSize = 1000;
const rarityWeights = [
    {
        value: "super_rare",
        from: 1,
        to: 1
    },
    {
        value: "rare",
        from: 2,
        to: 4
    },
    {
        value: "original",
        from: 5,
        to: editionSize,
    },
];

const cleanName = (_str) => {
    let name = _str.slice(0, -4);
    return name;
};

const getElements = (path) => {
    return fs
        .readdirSync(path)
        .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
        .map((i) => {
         return {
           name: cleanName(i),
           path:  `${path}/${i}`,  
         };
        });
    };


const layers = [
    {
    elements: {
        origin: getElements(`${dir}/ball/original`),
        rare: getElements(`${dir}/ball/rare`),
        super_rare: getElements(`${dir}/ball/super_rare`)
    },
    position: {x:0, y:0},
    size: {width: width, height: height},
},

{
    elements: {
        origin: getElements(`${dir}/eye color/original`),
        rare: getElements(`${dir}/eye color/rare`),
        super_rare: getElements(`${dir}/eye color/super_rare`)
    },
    position: {x:0, y:0},
    size: {width: width, height: height},
},

{
    elements: {
        origin: getElements(`${dir}/iris/original`),
        rare: getElements(`${dir}/iris/rare`),
        super_rare: getElements(`${dir}/iris/super_rare`)
    },
    position: {x:0, y:0},
    size: {width: width, height: height},
},
{
    elements: {
        origin: getElements(`${dir}/shine/original`),
        rare: getElements(`${dir}/shine/rare`),
        super_rare: getElements(`${dir}/shine/super_rare`)
    },
    position: {x:0, y:0},
    size: {width: width, height: height},
},
{
    elements: {
        origin: getElements(`${dir}/bottom lid/original`),
        rare: getElements(`${dir}/bottom lid/rare`),
        super_rare: getElements(`${dir}/bottom lid/super_rare`)
    },
    position: {x:0, y:0},
    size: {width: width, height: height},
},

{
    elements: {
        origin: getElements(`${dir}/top lid/original`),
        rare: getElements(`${dir}/top lid/rare`),
        super_rare: getElements(`${dir}/top lid/super_rare`)
    },
    position: {x:0, y:0},
    size: {width: width, height: height},
},
];

//console.log(layers, width);
module.exports = {
    layers, 
    width, 
    height, 
    description, 
    baseImageUri, 
    editionSize, 
    startEditionFrom, 
    endEditionAt,
    rarityWeights,
};