
// Import the fs module
const fs = require('fs');
const path = require('path');

// Define the path to the output file
const filePath = path.join(__dirname, '4-write-to-file.md');

// Content to be written to the file
const content = `Current timestamp: ${new Date().toISOString()}\n`;

// Define a function to perform an expensive operation
function expensiveOperation(iterations) {
    let result = 0;
    for (let i = 0; i < iterations; i++) {
        result += Math.sqrt(i);
    }
    return result;
}

// Write content to the file asynchronously
fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully.');
});

// Perform an expensive operation
console.log('Starting expensive operation...');
const result = expensiveOperation(1e7); // Increase this number to make it more expensive
console.log('Expensive operation result:', result);
