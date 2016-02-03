const fs = require('fs'),
    flowchart = require('flowchart.js'),
    settings = require('./settings');

const filename = process.argv[2];

fs.readFile('./graphql.flowchart', 'utf8', (err, data) => {
    if (err) throw err;

    const diagram = flowchart.parse(data);
    diagram.drawSVG('diagram', settings);
});
