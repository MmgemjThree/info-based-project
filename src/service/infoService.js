const fs=require('fs')
const path=require('path')

// doing this because i can't be bothered to do another database

const dataLoad=()=>{
    const filePath=path.join(__dirname, '../lib/items.json')
    const fileData=fs.readFileSync(filePath)
    return JSON.parse(fileData)
};

const getItems=()=>{
    const items=loadData()
    return items
};
const getItemByID=(id)=>{
    const items=loadData()
    return items.find((i)=>i.id===id)
};
module.exports={
    getItems,
    getItemByID
}