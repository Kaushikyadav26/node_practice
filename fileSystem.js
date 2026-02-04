import fs from "fs" 
export const readfile =() =>{
    console.log("Started:");
    const fileContent = fs.readFileSync("file.txt","utf8");
    console.log("~fileContent:",fileContent);
    fs.writeFileSync("file.txt","New Written content")
    const newFileContent =fs.readFileSync("file.txt","utf8");
    console.log("~readFile ~newFileContent:",newFileContent);
    fs.appendFileSync("file.txt","\nNew Line");
    const newAppendedContent = fs.readFileSync("file.txt","utf8");
    console.log("~readFile ~newAppendedContent:",newAppendedContent);
    console.log("~ended");
    
};