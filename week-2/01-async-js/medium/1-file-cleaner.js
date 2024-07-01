const fs = require("fs")

function replaceFile(filePath){
    let content = fs.readFileSync(filePath, 'utf-8');
    
    const cleanedText = content.replace(/\s+/g, ' ').trim();

    fs.writeFileSync(filePath , cleanedText , 'utf-8')
}

const filePath = '1-file-cleaner.md'
replaceFile(filePath);