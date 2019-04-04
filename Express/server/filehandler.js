const fs = require('fs');
const util = require('util');
const path = require('path');
const archiver = require('archiver');
//const archive = archiver('zip');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function generatehtmlFile(html) {
  console.log(html);
  html = filterOutToolBar(html);
  let template = await readFileAsync(path.join(__dirname, 'template.html'), 'utf8');
  template = template.replace('REPLACE_ME', html);
  await writeFileAsync(path.join(__dirname, 'output/index.html'), template);

  zipDirectory(path.join(__dirname, 'output'), path.join(__dirname, 'zip/website.zip'));
  console.log('wrote file');
}

function zipDirectory(source, out) {
  const archive = archiver('zip', {
    zlib: {
      level: 9
    }
  });
  const stream = fs.createWriteStream(out);
  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on('error', err => reject(err))
      .pipe(stream);
    stream.on('close', () => resolve());
    archive.finalize();
  });
}


function filterOutToolBar(html){
  return html.split('<hr>')[1];
}

module.exports.generatehtmlFile = generatehtmlFile;
