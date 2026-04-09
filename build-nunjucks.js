const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');

const viewsDir = path.join(__dirname, 'views');
const outputDir = path.join(__dirname, 'html');

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Configurar nunjucks
const env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(viewsDir),
  { autoescape: true }
);

// Leer todos los archivos .njk
const files = fs.readdirSync(viewsDir).filter(file => file.endsWith('.njk'));

// Filtrar solo archivos que NO empiezan con guión bajo (no son componentes)
const pageFiles = files.filter(file => !file.startsWith('_'));

if (pageFiles.length === 0) {
  console.log('⚠️  No hay archivos .njk principales para compilar');
  process.exit(0);
}

pageFiles.forEach(file => {
  const outputFile = file.replace('.njk', '.html');
  const outputPath = path.join(outputDir, outputFile);

  try {
    const html = env.render(file);
    fs.writeFileSync(outputPath, html, 'utf-8');
    console.log(`✅ ${file} → ${outputFile}`);
  } catch (error) {
    console.error(`❌ Error compilando ${file}:`, error.message);
    process.exit(1);
  }
});

console.log(`\n✨ Compilación completada: ${pageFiles.length} archivo(s) procesado(s)`);
