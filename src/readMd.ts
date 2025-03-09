import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const CONTENT_PATH = './src/content/';

function readFile(fileName: string) {
  const file = path.join(path.resolve(CONTENT_PATH), fileName);

  if (fs.existsSync(file)) {
    const raw = fs.readFileSync(file);

    const content = matter(raw);
    console.log('Here in the readfile here is my file content');
    console.log(content);
  }
}

function readFilesFromDir(dirName: string) {
  const dir = path.join(path.resolve(CONTENT_PATH), dirName);

  const files = fs.readdirSync(dir);
  console.log('Here in the dir func here are my files');
  console.log(files);
}

export { readFile, readFilesFromDir };
