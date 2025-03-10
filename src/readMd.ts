import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const CONTENT_PATH = './src/content/';

function readMd(filePath: string) {
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath);

    const content = matter(raw);
    // console.log('Here in the readfile here is my file content');

    const parsedContent = content.data;

    // console.log(parsedContent);

    return parsedContent;
  } else {
    throw Error(
      `file does not exist when attempting to read from markdown file: ${filePath}`
    );
  }
}

function readFilesFromDir(dirName: string) {
  // resolving paths
  const dir = path.join(path.resolve(CONTENT_PATH), dirName);

  const files = fs.readdirSync(dir);
  // console.log('Here in the dir func here are my files');
  // console.log(files);

  const filesContent = files
    .map((fileName) => path.join(dir, fileName))
    .map((fileName) => readMd(fileName))
    .filter((pageContent) => pageContent !== undefined);

  return filesContent;
}

function readFile(fileName: string) {
  // resolving paths
  const filePath = path.join(path.resolve(CONTENT_PATH), fileName);

  return readMd(filePath);
}

export { readFile, readFilesFromDir };
