const { resolve } = require('path');
const { exec } = require('child_process');

// List of types to generate schemas for
const types = ['Conflict', 'Theme', 'PointOfView', 'Resolution', 'Climax', 'FallingAction', 'Tone', 'Exposition', 'Protagonist', 'Dialogue', 'Style', 'Symbolism'];

types.forEach((type) => {
    const command = `npx typescript-json-schema tsconfig.json ${type} --out schemas/${type}.schema.json --required`;
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error generating schema for ${type}: ${stderr}`);
        } else {
            console.log(`Schema for ${type} generated: ${stdout}`);
        }
    });
});