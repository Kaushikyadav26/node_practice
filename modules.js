import fs from "fs";

import path from "path"

const filePath=path.join("node_modules","..","file.txt");

fs.readFile(filePath,"utf8",(err,content)=>{
    console.log("~content",content);
    
});