const nunjucks = require('nunjucks');
const fs = require('fs');

// Configure Nunjucks to look in the current directory
const env = nunjucks.configure('.', { autoescape: true });

try {
    const res = env.render('index.njk');
    fs.writeFileSync('index.html', res);
    console.log('Successfully compiled index.njk to index.html');
} catch (err) {
    console.error('Error rendering template:', err);
}