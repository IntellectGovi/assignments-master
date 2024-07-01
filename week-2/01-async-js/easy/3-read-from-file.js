// Import the fs module
const fs = require('fs');
const path = require('path');

// Define a function to perform an expensive operation
function expensiveOperation(iterations) {
    let result = 0;
    for (let i = 0; i < iterations; i++) {
        result += Math.sqrt(i);
    }
    return result;
}

// Define the path to the file
const filePath = path.join(__dirname, '3-read-from-file.md');

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

// Perform an expensive operation
console.log('Starting expensive operation...');
const result = expensiveOperation(1e7); // Increase this number to make it more expensive
console.log('Expensive operation result:', result);
